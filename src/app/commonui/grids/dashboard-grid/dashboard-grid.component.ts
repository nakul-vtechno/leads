import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LeadsService } from 'src/app/services/leads/leads.service';
import { faArrowCircleUp, faHistory, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { uniq } from 'lodash';
import { EditLeadComponent } from '../../edit-lead/edit-lead.component';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  leads;
  allLeads;
  closeResult: string;
  tooltipClientInfo: string;
  popperShowClientDetails: object;
  page = 1;
  pageSize = 5;
  collectionSize: number;
  filterModel;
  public faArrowCircleUp = faArrowCircleUp;
  public faHistory = faHistory;
  public faEdit = faEdit;
  public faInfoCircle = faInfoCircle;

  public filters = {
    filterProduct: '',
    filterCustomerName: '',
    filterCustomerMobile: '',
    filterCustomerDate: '',
    filterStatus: '',
  };

  public currentFilter = '';

  constructor(private modalService: NgbModal,
              private leadsService: LeadsService,
              private editLead: EditLeadComponent) { }

  ngOnInit() {
    this.allLeads = this.leadsService.getLeads();
    this.collectionSize = this.allLeads.data.length;
    // this.leads = JSON.stringify(JSON.parse(this.allLeads));
    this.leads = this.allLeads.data.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    console.log('9Jan => ', this.leads);
  }

  onSort(event) {

  }

  updateClientTooltip(name) {
    this.tooltipClientInfo = name;
  }

  onPopperShowClientDetails(lead){
    console.log('10Jan => ', lead)
    this.popperShowClientDetails = lead;
  }

  openLead(lead) {
    this.leadsService.setCurrentLead(lead);
    this.editLead.open(lead);
    // this.modalService.open(EditLeadComponent, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
    //   console.log('13jan result', result)
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   console.log('13jan reason', reason)
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  // get allLeads() {
  //   // return this.leads
  //   return this.leadsService.getLeads().data
  //     // .map((lead, i) => ({id: i + 1, ...lead}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onFilterClick(id){
    console.log('hello => ', id);
    this.currentFilter = id;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.filteredResult(term))
    )

    filteredResult(term) {
      console.log('item item item => ', term);
      const rArr = [];
      if(this.currentFilter == '') {
        return;
      }
      console.log('this.currentFilter => ', this.currentFilter);
      const p = this.leads.filter(v => v[this.currentFilter].toLowerCase().indexOf(term.toLowerCase()) > -1);
      p.forEach(item => {
        rArr.push(item[this.currentFilter]);
      });
      return uniq(rArr);
    }

    onSelect(event, filter) {
      this.leads = this.leadsService.getLeadsByParam(filter, event.item).data;
      this.collectionSize = this.leads.length;
    }

    clearFilter(filter) {
      this.filters[filter] = '';
      this.collectionSize = this.allLeads.length;
      this.allLeads = this.leadsService.getFilteredLeads(this.filters).data;
      this.leads = this.allLeads.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      // this.filters[filter] = '';
      // this.leads = this.leadsService.getLeadsByAllParams(this.filters).data;
      // this.collectionSize = this.leads.length;
    }

    onFilterChange() {
      this.allLeads = this.leadsService.getFilteredLeads(this.filters).data;
      this.collectionSize = this.allLeads.length;
      this.leads = this.allLeads.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

}

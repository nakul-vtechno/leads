import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LeadsService } from 'src/app/services/leads/leads.service';
import {Observable} from 'rxjs';
import { faArrowCircleUp, faHistory, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { uniq } from 'lodash';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  leads;
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

  public filterProduct: string;
  public filterCustomerName: string;
  public filterCustomerMobile: string;
  public filterCustomerDate: string;
  public filterStatus: string;
  public currentFilter: string = '';

  constructor(private modalService: NgbModal, private leadsService: LeadsService) { }

  ngOnInit() {
    this.leads = this.leadsService.getLeads().data;
    console.log('9Jan => ', this.leads);
    this.collectionSize = this.leads.length;
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  get allLeads() {
    // return this.leads
    return this.leadsService.getLeads().data
      // .map((lead, i) => ({id: i + 1, ...lead}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

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
      // this.leads = this.leads.filter(item => item['productWanted'].toLowerCase() == event.item.toLowerCase())
    }

}

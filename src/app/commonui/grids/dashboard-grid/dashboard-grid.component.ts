import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LeadsService } from 'src/app/services/leads/leads.service';
import { faArrowCircleRight, faHistory, faEdit, faInfoCircle, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
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
  currentLead = null;
  closeResult: string;
  tooltipClientInfo: string;
  assignedToLeadId: any;
  assignedToLeadAsignee: any;
  popperShowClientDetails: object;
  popperShowLeadHistory: object;
  popperShowLeadRemarks: object;
  page = 1;
  pageSize = 5;
  collectionSize: number;
  filterModel;
  remark: string;
  public faArrowCircleRight = faArrowCircleRight;
  public faHistory = faHistory;
  public faEdit = faEdit;
  public faInfoCircle = faInfoCircle;
  public faCommentAlt = faCommentAlt;

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

  onPopperShowLeadHistory(history){
    console.log('10Jan => ', history);
    const formatedHistory = this.formatLeadHistory(history);
    this.popperShowLeadHistory = formatedHistory;
  }

  openLead(lead) {
    this.leadsService.setCurrentLead(lead);
    this.editLead.open(lead);
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

    openLeadHistory(history, content) {
      const formatedHistory = this.formatLeadHistory(history);
      this.popperShowLeadHistory = formatedHistory;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        if(result === 'yes') {
          alert('dsa');
        }
      }, (reason) => {
      });
    }

    openLeadRemarks(leadId, remarks, content) {
      this.popperShowLeadRemarks = this.formatLeadRemarks(remarks);
      this.currentLead = leadId;
      console.log('10Jan popperShowLeadRemarks => ', this.popperShowLeadRemarks);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        if(result === 'yes') {
          alert('dsa');
        }
      }, (reason) => {
      });
    }

    openAssignLead(leadId, leadAssignee, content) {
      this.assignedToLeadId = leadId;
      this.assignedToLeadAsignee = leadAssignee;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        if(result === 'yes') {
          alert('dsa');
        }
      }, (reason) => {
      });
    }

    addRemark() {
      this.leadsService.addRemark(this.currentLead, this.remark);
      this.popperShowLeadRemarks = this.formatLeadRemarks(this.leadsService.getLeadRemarks(this.currentLead));
    }

    close() {
      this.modalService.dismissAll();
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

    private formatLeadHistory(history) {
      let arrHistory;
      const arrReturn = [];
      if (history == null) {
        return arrReturn;
      }
      arrHistory = history.split('|').map(item => item.split(':'));
      arrHistory.forEach(item => {
        if (item[0] !== 'null') {
          arrReturn.push([this.dateToString(item[0]), item[1]]);
        }
      });
      return arrReturn.reverse();
    }

    private formatLeadRemarks(remarks) {
      let arrRemarks;
      const arrReturn = [];
      if(remarks == null) {
        return arrReturn;
      }
      arrRemarks = remarks.split('|').map(item => item.split(':'));
      console.log('27Jan arrRemarks => ', arrRemarks);
      arrRemarks.forEach(item => {
        if (item[0] !== 'null') {
          arrReturn.push([this.dateToString(item[0]), item[1]]);
        }
      });
      return arrReturn.reverse();
    }

    private dateToString(date) {
      const day = date.split('-')[0];
      const month = date.split('-')[1];
      const year = date.split('-')[2];

      return new Date(year, month, day).toDateString();
    }

}

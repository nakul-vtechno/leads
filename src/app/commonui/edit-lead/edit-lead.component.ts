import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LeadsService } from 'src/app/services/leads/leads.service';
import { faArrowCircleUp, faCalendarDay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  public faArrowCircleUp = faArrowCircleUp;
  public faCalendarDay = faCalendarDay;
  closeResult: string;
  leadForm: FormGroup;
  currentLead = {};

  /* Date Models */
  currentDateModel : NgbDateStruct = {year: null, month: null, day: null};
  loginDateModel : NgbDateStruct = {year: null, month: null, day: null};
  sanctionDateModel : NgbDateStruct = {year: null, month: null, day: null};
  disbursedDateModel : NgbDateStruct = {year: null, month: null, day: null};
  lastStatusChangeDateModel : NgbDateStruct = {year: null, month: null, day: null};

  /* Status */
  // tslint:disable-next-line: quotemark
  leadStatus = "";

  leadStatusOptions = [
    'Verification Pending',
    'Verification Done',
    'Document Pending',
    'Case Logged in',
    'Case Approved',
    'Case Disbursed'
  ];

  availableProducts = [
    'Personal Loan',
    'Credit Card',
    'Auto Loan',
    'Bussiness Loan',
    'Home Loan',
    'Loan Againt Property'
  ];

  constructor(private modalService: NgbModal, private leadsService: LeadsService) {
    this.leadForm = new FormGroup({
      leadId: new FormControl(''),
      teamMemberId: new FormControl(''),
      teamLeaderId: new FormControl(''),
      customerName: new FormControl(''),
      customerNumber: new FormControl(''),
      productWanted: new FormControl(''),
      requiredProductValue: new FormControl(''),
      employementType: new FormControl(''),
      companyBusinessName: new FormControl(''),
      monthlyGrossIncome: new FormControl(''),
      monthlyNetIncome: new FormControl(''),
      numberOfCurrentActiveLoans: new FormControl(''),
      totalValueOfCurrentActiveLoans: new FormControl(''),
      totalValueOfCurrentMonthlyEmis: new FormControl(''),
      numberOfCurrentActiveCreditCards: new FormControl(''),
      leadCreationDate: new FormControl(''),
      currentStatus: new FormControl(''),
      lastStatusChangeDate: new FormControl(''),
      appliedCardName: new FormControl(''),
      loginAmount: new FormControl(''),
      sanctionAmount: new FormControl(''),
      disbursedAmount: new FormControl(''),
      loginDate: new FormControl(''),
      sanctionDate: new FormControl(''),
      disbursedDate: new FormControl(''),
    });
  }

  ngOnInit() {
    this.currentLead = this.leadsService.getCurrentLead();
    this.leadForm.get('leadId').patchValue(this.currentLead['leadId']);
    this.leadForm.get('teamMemberId').patchValue(this.currentLead['teamMemberId']);
    this.leadForm.get('teamLeaderId').patchValue(this.currentLead['teamLeaderId']);
    this.leadForm.get('customerName').patchValue(this.currentLead['customerName']);
    this.leadForm.get('customerNumber').patchValue(this.currentLead['customerNumber']);
    this.leadForm.get('productWanted').patchValue(this.currentLead['productWanted']);
    this.leadForm.get('requiredProductValue').patchValue(this.currentLead['requiredProductValue']);
    this.leadForm.get('employementType').patchValue(this.currentLead['employementType']);
    this.leadForm.get('companyBusinessName').patchValue(this.currentLead['companyBusinessName']);
    this.leadForm.get('monthlyGrossIncome').patchValue(this.currentLead['monthlyGrossIncome']);
    this.leadForm.get('monthlyNetIncome').patchValue(this.currentLead['monthlyNetIncome']);
    this.leadForm.get('numberOfCurrentActiveLoans').patchValue(this.currentLead['numberOfCurrentActiveLoans']);
    this.leadForm.get('totalValueOfCurrentActiveLoans').patchValue(this.currentLead['totalValueOfCurrentActiveLoans']);
    this.leadForm.get('totalValueOfCurrentMonthlyEmis').patchValue(this.currentLead['totalValueOfCurrentMonthlyEmis']);
    this.leadForm.get('numberOfCurrentActiveCreditCards').patchValue(this.currentLead['numberOfCurrentActiveCreditCards']);
    this.currentDateModel = this.formatDate(this.currentLead['leadCreationDate']);
    this.leadForm.get('leadCreationDate').patchValue(this.currentLead['leadCreationDate']);
    this.leadStatus = this.currentLead['currentStatus'];
    this.leadForm.get('currentStatus').patchValue(this.currentLead['currentStatus']);

    this.lastStatusChangeDateModel = this.formatDate(this.currentLead['lastStatusChangeDate']);
    this.leadForm.get('lastStatusChangeDate').patchValue(this.currentLead['lastStatusChangeDate']);


    this.leadForm.get('appliedCardName').patchValue(this.currentLead['appliedCardName']);
    this.leadForm.get('loginAmount').patchValue(this.currentLead['loginAmount']);
    this.leadForm.get('sanctionAmount').patchValue(this.currentLead['sanctionAmount']);
    this.leadForm.get('disbursedAmount').patchValue(this.currentLead['disbursedAmount']);
    this.loginDateModel = this.formatDate(this.currentLead['loginDate']);
    this.leadForm.get('loginDate').patchValue(this.currentLead['loginDate']);
    this.sanctionDateModel = this.formatDate(this.currentLead['sanctionDate']);
    this.leadForm.get('sanctionDate').patchValue(this.currentLead['sanctionDate']);
    this.disbursedDateModel = this.formatDate(this.currentLead['disbursedDate']);
    this.leadForm.get('disbursedDate').patchValue(this.currentLead['disbursedDate']);
  }

  open(lead) {
    this.modalService.open(EditLeadComponent, {ariaLabelledBy: 'modal-basic-title', scrollable: true, size: 'xl'}).result.then((result) => {
      console.log('13jan result', result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('13jan reason', reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(reason) {
    console.log('13jan reason reason reason', reason);
    this.leadsService.setCurrentLead(null);
    this.modalService.dismissAll();
  }

  save(reason) {
    console.log('13jan reason reason reason', reason);
    this.leadsService.setCurrentLead(null);
    this.modalService.dismissAll();
  }

  selectionChanged(s) {

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

  private formatDate(date) {
    if(date === null) {
      return null;
    }
    return {
      year: parseInt(date.split('-')[2]),
      month: parseInt(date.split('-')[1]),
      day: parseInt(date.split('-')[0])
    };
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LeadsService } from 'src/app/services/leads/leads.service';
import { faArrowCircleUp, faCalendarDay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {

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
      currentStatus: new FormControl(''),
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
  }

  open() {
    this.modalService.open(AddLeadComponent, {ariaLabelledBy: 'modal-basic-title', scrollable: true, size: 'xl'}).result.then((result) => {
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

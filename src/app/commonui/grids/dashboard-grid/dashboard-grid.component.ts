import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  @Input() leads;
  closeResult: string;
  tooltipClientInfo: string;
  popperShowClientDetails: object;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log("9Jan => ", this.leads)
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

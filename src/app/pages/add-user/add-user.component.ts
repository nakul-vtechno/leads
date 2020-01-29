import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faArrowCircleUp, faCalendarDay, faPen} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  availableRoles = [
    'Team Member',
    'Team Lead',
    'Team Manager',
    'Sub Admin',
    'Admin',
  ];
  stauses = [
    'Active',
    'Inactive',
    'On Hold'
  ];
  teamLeaderId: number;
  managerId: number;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userMail: new FormControl('', Validators.required),
      userMobile: new FormControl('', Validators.required),
      userRole: new FormControl('', Validators.required),
      userStauts: new FormControl('', Validators.required),
      userTeamLead: new FormControl('', Validators.required),
      userManager: new FormControl('', Validators.required)
    });
  }

  get userName() { return this.userForm.get('userName'); }
  get userMail() { return this.userForm.get('userMail'); }
  get userMobile() { return this.userForm.get('userMobile'); }
  get userRole() { return this.userForm.get('userRole'); }
  get userStauts() { return this.userForm.get('userStauts'); }
  get userTeamLead() { return this.userForm.get('userTeamLead'); }
  get userManager() { return this.userForm.get('userManager'); }

  selectionChanged(event) {

  }

  openAssignTeamLead(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'yes') {
        alert('dsa');
      }
    }, (reason) => {
    });
  }

  openAssignManager(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'yes') {
        alert('dsa');
      }
    }, (reason) => {
    });
  }

  selectTeamLead(event) {
    console.log('28jan =>', this.userForm.get('userTeamLead'));
    this.userForm.get('userTeamLead').patchValue(event[0]);
    this.teamLeaderId = event[1];
  }

  selectManager(event) {
    console.log('28jan =>', this.userForm.get('userTeamLead'));
    this.userForm.get('userManager').patchValue(event[0]);
    this.managerId = event[1];
  }

  close() {
    this.modalService.dismissAll();
  }

}

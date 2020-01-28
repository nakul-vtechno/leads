import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-manage-settings',
  templateUrl: './manage-settings.component.html',
  styleUrls: ['./manage-settings.component.css']
})
export class ManageSettingsComponent implements OnInit {

  public settings: object;
  public settingsForm: FormGroup;

  constructor(private settingsService: SettingsService) {
    this.settingsForm = new FormGroup({
      siteName: new FormControl('')
    });
  }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    this.settingsForm.get('siteName').patchValue(this.settings['siteName']);
  }

  saveClicked() {
    this.settingsService.setSetting('siteName', this.settingsForm.get('siteName').value);
    console.log('26Jan => ', this.settingsForm.get('siteName').value);
  }
}

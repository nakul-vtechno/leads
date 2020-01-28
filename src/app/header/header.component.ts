import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  settings: object;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    console.log("26jan => ", this.settings);
  }

}

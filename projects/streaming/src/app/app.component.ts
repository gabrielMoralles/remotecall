import { CommonService } from './services/common.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'streaming';
  hide = true;
  constructor(private router: Router, public common: CommonService) {}
  open(value) {

    this.router.navigate([`/staging/${value}`]);
    this.hide = false;
  }
}

import { Component } from '@angular/core';
import { PLASMIC } from './init/plasmic-init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loader = PLASMIC;
}

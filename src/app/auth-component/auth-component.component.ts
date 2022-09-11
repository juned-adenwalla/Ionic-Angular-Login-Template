import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})
export class AuthComponentComponent implements OnInit {
  screen: any = 'signin';

  constructor() { }

  ngOnInit() {}

  change(event){
    this.screen = event;
  }

}

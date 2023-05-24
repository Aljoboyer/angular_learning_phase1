import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page2',
  templateUrl: './dashboard-page2.component.html',
  styleUrls: ['./dashboard-page2.component.scss']
})
export class DashboardPage2Component implements OnInit {

  constructor( private routes: ActivatedRoute, private locate: Location) { }

  ngOnInit(): void {
    console.log('router data', this.locate)
  }
  receiveBooleanValue($event: any) {
    console.log('data', $event)
   }
  
}

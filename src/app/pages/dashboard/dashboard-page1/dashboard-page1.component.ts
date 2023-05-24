import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page1',
  templateUrl: './dashboard-page1.component.html',
  styleUrls: ['./dashboard-page1.component.scss']
})
export class DashboardPage1Component implements OnInit {
  userFlow: any = {
    name: 'sample data',
    age: 'sample age'
  };

  @Output() booleanValueEvent = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.booleanValueEvent.emit(this.userFlow)
  }
  SendData(){
    this.router.navigateByUrl('/dashboard/page2', {
      state: [{ by: 'edupala.com' , name: "ahan tanvee"}, { by: 'edupala.com' , name: "ahan tanvee"}],
  } );
  }
}

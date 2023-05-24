import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DisplayUserComponent } from './../display-user/display-user.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  id: string = ''
  url = 'http://localhost:5000'
  modalClose: boolean = false
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private http: HttpClient,) { 
    this.id = data

  }

  ngOnInit(): void {
    
  }
  ConfirmClick(){
    console.log('click hoise')
    this.http.delete(`${this.url}/DeleteUser/${this.id}`).subscribe((data) => {
      console.log('delete data', data)
      this.modalClose = true
    })
  } 
}

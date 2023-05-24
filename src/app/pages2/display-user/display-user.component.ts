import { Component, OnInit , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { ModalsComponent } from './../modals/modals.component';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { UpdateUserComponent } from './../update-user/update-user.component';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss'],
})

export class DisplayUserComponent  {
  users: any = []
  url = 'http://localhost:5000'
  id: string = ''

  constructor( private http: HttpClient, private userService:  CartServiceService,public dialog: MatDialog, public updateModal: MatDialog) { }

  ngOnInit(): void {
    this.http.get(`${this.url}/getUser`).subscribe((data) => {
      this.users = data
    })
    console.log('hello', this.users.length)
  }
 
  DeleteHandler(id: string){
    this.id = id
    console.log('clicking')
    const dialogRef = this.dialog.open(ModalsComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === false){
        this.ngOnInit()
      }
    });
  }

  UpdateHandler(id: string){
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === false){
        this.ngOnInit()
      }
    });
  }
}

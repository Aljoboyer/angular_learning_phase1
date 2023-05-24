import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})

export class UpdateUserComponent implements OnInit {
  id: string = ''
  url = 'http://localhost:5000' 
  name = ''
  age = ''
  phone = ''
  email = ''
  nationality = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private http: HttpClient,) {
    
    this.id = data
  
   }

  ngOnInit(): void {
    this.http.get(`${this.url}/UpdateUser/${this.id}`).subscribe((datas: any) => {
      this.name = datas?.name,
      this.age = datas?.age
      this.phone = datas?.phone
      this.email = datas?.email
      this.nationality = datas?.nationality
    })
  }

  UpdateClick(){
    const newUser = {
      name : this.name,
      age : this.age,
      phone : this.phone,
      email : this.email,
      nationality : this.nationality,
    }
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.put(`${this.url}/PutingUpdateUser/${this.id}`, newUser).subscribe((datas: any) => {
      console.log('datas',)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  name = ''
  age = ''
  phone = ''
  email = ''
  nationality = ''
  profileImg: any = ''

  url = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
 
  }

  OnFileChange(profileImg: any){
    const img = profileImg.target.files[0]
    this.profileImg = img
  }

  UserFormSubmit() {
    const fd = new FormData()

    fd.append('profileImg', this.profileImg)
    fd.append('name', this.name)
    fd.append('age', this.age)
    fd.append('phone', this.phone)
    fd.append('email', this.email)
    fd.append('nationality', this.nationality)

    this.http.post('http://localhost:5000/postUser', fd)
    .subscribe(data => {
      this.name = "",
      this.email = "",
      this.phone = "",
      this.age = "",
      this.nationality = ""
    });
  }

}

import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'Practice App';
  isVisible = true
  constructor(private router: Router){

  }
  ngDoCheck(): void{
    const currentUrl = this.router.url;
    if(currentUrl == '/dashboard' || currentUrl == '/dashboard/home' || currentUrl == '/dashboard/page2'){
      this.isVisible = false
    }
    else{
      this.isVisible = true
    }
  }
}

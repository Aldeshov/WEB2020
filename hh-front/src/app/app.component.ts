import { Component } from '@angular/core';
import { VacancyService } from "./vacancy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Office"
  logged = false;

  username = '';
  password = '';

  constructor(private service: VacancyService) {}

  ngOnInit(){
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  login(){
    this.service.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }
}

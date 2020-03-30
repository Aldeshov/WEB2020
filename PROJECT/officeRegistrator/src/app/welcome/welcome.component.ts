import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../user.service'
import { Student } from '../oop/Student'
import { Teacher } from '../oop/Teacher'
import { User } from '../oop/User';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  u: User = null;

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.userService.checkCookie("userName","userPassword").subscribe(u => this.func(u));
  }

  func(u: User) {
    if(u != null)
    {
      if(u.type == "Student")
      {
        this.u = (<Student> u);
      }
      else
      {
        if(u.type == "Teacher")
        {
          this.u = (<Teacher> u);
        }
      }
    }
    else
    {
      this.router.navigate(['']);
    }
  }
}
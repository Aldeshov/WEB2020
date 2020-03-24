import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Student } from '../oop/Student'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.checkCookie("userName","userPassword").subscribe(s => this.check(s));
    if(this.studentService.getCookie("userName") != "")
    {
      (<HTMLInputElement> document.getElementById("inname")).value = this.studentService.getCookie("userName");
      this.studentService.setCookie("userName",this.studentService.getCookie("userName"),0.001);
    }
  }

  go() {
    let userName = (<HTMLInputElement> document.getElementById("inname")).value;
    let userPassword = (<HTMLInputElement> document.getElementById("inpassword")).value;
    let c = (<HTMLInputElement> document.getElementById("save")).checked;

    this.studentService.getStudent(userName, userPassword).subscribe(s => this.check(s, c, true));
  }
  
  check(s: Student, check = false, d = false): void {
    if(s != null) {
      let userName = s.userName;
      let userPassword = s.userPassword;

      if(check)
      {
        this.studentService.setCookie("userName",userName, 99);
        this.studentService.setCookie("userPassword",userPassword, 99);
      }
      else
      {
        if(d)
        {
          this.studentService.setCookie("userName",userName, 0.001);
          this.studentService.setCookie("userPassword",userPassword, 0.001);
        }
      }
      this.router.navigate(['/welcome']);
    }
    else
    {
      if(d)
      {
        (<HTMLInputElement> document.getElementById("inname")).style.borderBottomColor = "red";
        (<HTMLInputElement> document.getElementById("inpassword")).style.borderBottomColor = "red";
        (<HTMLInputElement> document.getElementById("inname")).value = "";
        (<HTMLInputElement> document.getElementById("inpassword")).value = "";
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../user.service'
import { Student } from '../oop/Student'
import { Teacher } from '../oop/Teacher'
import { range } from 'rxjs';
import { Course } from '../oop/Course';
import { User } from '../oop/User';
import { News } from '../oop/News';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  u: User = null;

  news: News[] = [];
  type: String = "null";
  title: String = "Welcome";

  day = new Date().getDay() - 1;
  hour = new Date().getHours();
  min: number = new Date().getMinutes();
  
  sch: Course[][] = [];

  anums: number[] = [];
  bnums: number[] = [];
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {

    if(this.day == -1)
    {
      this.day = 6;
    }

    if(this.hour >= 0 && this.hour <= 4)
    {
      this.title = "Good night";
    }

    if(this.hour >= 5 && this.hour <= 11)
    {
      this.title = "Good morning";
    }
    if(this.hour >= 12 && this.hour <= 17)
    {
      this.title = "Good afternoon";
    }
    if(this.hour >= 18 && this.hour <= 22)
    {
      this.title = "Good evening";
    }
    if(this.hour >= 23)
    {
      this.title = "Good night";
    }

    this.sch = this.newArray(7,13);

    range(0,7).subscribe(x => this.anums[x] = x);
    range(0,13).subscribe(x => this.bnums[x] = x);

    this.userService.getNews().subscribe(n => this.news = n);
    this.userService.checkCookie("userName","userPassword").subscribe(u => this.func(u));
  }

  func(u: User) {
    if(u != null)
    {
      if(u.type == "Student")
      {
        this.u = (<Student> u);

        this.type = "Student";

        for(let i = 0; i < (<Student> u).courses.length; i++)
        {
          for(let j = 0; j < (<Student> u).courses[i].schedule.length; j++)
          {
            this.sch[(<Student> u).courses[i].schedule[j][0]][(<Student> u).courses[i].schedule[j][1]] = (<Student> u).courses[i];
          }
        }
      }
      else 
      {
        if(u.type == "Teacher")
        {
          this.u = (<Teacher> u);

          this.type = "Teacher";

          this.userService.getTeacherCourses((<Teacher> this.u).id).subscribe(cs => this.teachersch(cs));
        }
      }
    }
    else
    {
      this.router.navigate(['']);
    }
  }

  newArray(x,y):Course[][] {
    let temp: Course[][] = [];
    for(let i = 0; i < y; i++) {
      temp[i] = [];
      for(let j = 0; j < x; j++) {
        temp[i][j] = null;
      }
    }
    return temp;
  }

  teachersch(courses: Course[]) {
    for(let i = 0; i < courses.length; i++)
    {
      for(let j = 0; j < courses[i].schedule.length; j++)
      {
        this.sch[courses[i].schedule[j][0]][courses[i].schedule[j][1]] = courses[i];
      }
    }
  }
  
  modify(){
    if(document.getElementById('menu').classList.contains('hidden'))
    {
      document.getElementById('menu').classList.remove('hidden');
      document.getElementById('x1').classList.remove('before1');
      document.getElementById('x').classList.remove('before');
      document.getElementById('x2').classList.remove('before2');
      document.getElementById('x1').classList.add('after1');
      document.getElementById('x').classList.add('after');
      document.getElementById('x2').classList.add('after2');
    }
    else
    {
      document.getElementById('menu').classList.add('hidden');
      document.getElementById('x1').classList.remove('after1');
      document.getElementById('x').classList.remove('after');
      document.getElementById('x2').classList.remove('after2');
      document.getElementById('x1').classList.add('before1');
      document.getElementById('x').classList.add('before');
      document.getElementById('x2').classList.add('before2');
    }
  }

  logout() {
    document.cookie='userPassword=;expires=Thu; 01 Jan 1970; path=/'; 
    location.reload()
  }
}
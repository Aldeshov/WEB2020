import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { StudentService } from '../student.service'
import { Student } from '../oop/Student'
import { range } from 'rxjs';
import { Course } from '../oop/Course';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  s: Student = null;
  title: String = "Welcome";
  day = new Date().getDay() - 1;
  hour = new Date().getHours();
  min: number = new Date().getMinutes();
  newsCount: number[] = [];
  sch: Course[][] = [];
  anums: number[] = [];
  bnums: number[] = [];
  constructor(private studentService: StudentService, private router: Router) { }
  
  ngOnInit(): void {
    
    if(this.day == -1)
    {
      this.day = 6;
    }

    if(this.hour >= 0 && this.hour <= 4)
    {
      this.title = "Good night";
      document.getElementById("background").style.background = "url('../../assets/images/back/night_back.jpg')";
      document.getElementById("welcome").style.background = "linear-gradient(#272383, #d6e4ec)";
      document.getElementById("background").style.color = "white";
    }
    if(this.hour >= 5 && this.hour <= 11)
    {
      this.title = "Good morning";
      document.getElementById("background").style.background = "url('../../assets/images/back/morning_back.jpg')";
      document.getElementById("welcome").style.background = "linear-gradient(#c3c92d, #d6e4ec)";
      document.getElementById("background").style.color = "black";
    }
    if(this.hour >= 12 && this.hour <= 17)
    {
      this.title = "Good afternoon";
      document.getElementById("background").style.background = "url('../../assets/images/back/day_back.jpg')";
      document.getElementById("welcome").style.background = "linear-gradient(#5298d6, #d6e4ec)";
      document.getElementById("background").style.color = "black";
    }
    if(this.hour >= 18 && this.hour <= 22)
    {
      this.title = "Good evening";
      document.getElementById("background").style.background = "url('../../assets/images/back/evening_back.jpg')";
      document.getElementById("welcome").style.background = "linear-gradient(#e8b139, #d6e4ec)";
      document.getElementById("background").style.color = "white";
    }
    if(this.hour >= 23)
    {
      this.title = "Good night";
      document.getElementById("background").style.background = "url('../../assets/images/back/night_back.jpg')";
      document.getElementById("welcome").style.background = "linear-gradient(#272383, #d6e4ec)";
      document.getElementById("background").style.color = "white";
    }

    document.getElementById("background").style.backgroundSize = "100% 100%";
    document.getElementById("background").style.borderRadius = "20px";
    document.getElementById("background").style.minHeight = "320px";

    this.sch = this.newArray(7,13);

    range(0,7).subscribe(x => this.anums[x] = x);
    range(0,13).subscribe(x => this.bnums[x] = x);
    
    this.studentService.checkCookie("userName","userPassword").subscribe(s => this.func(s));
  }

  func(s: Student) {
    if(s != null)
    {
      this.s = s;
      range(0,s.news.length).subscribe(x => this.newsCount[x] = x);
      for(let i = 0; i < s.courses.length; i++)
      {
        for(let j = 0; j < s.courses[i].schedule.length; j++)
        {
          this.sch[s.courses[i].schedule[j][0]][s.courses[i].schedule[j][1]] = s.courses[i];
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

  openclose() {
    alert()
  }
}

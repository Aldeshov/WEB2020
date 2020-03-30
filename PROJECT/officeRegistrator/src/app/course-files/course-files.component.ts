import { Component, OnInit } from '@angular/core';

import { User } from '../oop/User';
import { Student } from '../oop/Student';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Teacher } from '../oop/Teacher';

@Component({
  selector: 'app-course-files',
  templateUrl: './course-files.component.html',
  styleUrls: ['./course-files.component.css']
})

export class CourseFilesComponent implements OnInit {

  u: User = null;

  title: Title[] = [{title: "Courses", path: "/"}];

  objects: Object[] = [];

  path: string = "/";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkCookie("userName","userPassword").subscribe(u => this.func(u));
  }

  func(u: User) {
    this.objects = [];
    if(u != null)
    {
      if(u.type == "Student")
      {
        this.u = (<Student> u);

        for(let i = 0; i < (<Student> u).courses.length; i++)
        {
          this.objects.push({id: (<Student> u).courses[i].id, name: (<Student> u).courses[i].name, type: "#/Course", ico: "../../assets/images/types/course.png"});
        }
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

  go(title: Title): void {
    if(title.path == this.path){
      return;
    }
    if(title.path == "/")
    {
      this.path = "/";
      this.title = [{title: "Courses", path: "/"}];
      this.userService.checkCookie("userName","userPassword").subscribe(u => this.func(u));
    }
    else
    {
      this.path = title.path;
      for(let i = 0; i < this.title.length; i++) {
        if(this.title[i] == title){
          let n = this.title.length;
          while(i + 1 < n)
            {
              this.title.pop();
              i++;
            }
          break;
        }
      }
      this.userService.getFiles(title.path).subscribe(files => this.get(files));
    }
  }

  getFiles(obj: Object): void {
    if(obj.type == "#/Course")
    {
      this.userService.getFiles(obj.id).subscribe(files => this.get(files));
      if(!this.path.endsWith(obj.id))
      {
        this.path = this.path + obj.id;
        this.title.push({title: obj.name, path: this.path});
      }
    }
    else
    {
      if(obj.type == "#/Dir")
      {
        this.userService.getFiles(this.path + "/" + obj.name).subscribe(files => this.get(files));
        if(!this.path.endsWith(obj.name))
        {
          this.path = this.path + "/" + obj.name;
          this.title.push({title: obj.name, path: this.path});
        }
      }
      else
      {
        alert("That is the sample)");
        // Not Finished
      }
    }
  }

  get(files){
    this.objects = [];
    let dirs: String[] = [];
    for(let i = 0; i < files.length; i++){
      if(this.path == files[i].path)
      {
        let temp: String = "";
        for(let j = 0; j < files[i].name.length; j++){
          temp += files[i].name[files[i].name.length - j - 1];
        }

        let icon = "../../assets/images/types/unknown.png";

        let type = files[i].name.substring(files[i].name.length - temp.indexOf("."), files[i].name.length);

        if(type == "doc" || type == "docx")
        {
          icon = "../../assets/images/types/docx.png";
        }

        if(type == "xls" || type == "xlsx")
        {
          icon = "../../assets/images/types/xls.png";
        }

        if(type == "txt" || type == "md")
        {
          icon = "../../assets/images/types/txt.png";
        }

        if(type == "ppt" || type == "pptx")
        {
          icon = "../../assets/images/types/ppt.png";
        }

        if(type == "pdf")
        {
          icon = "../../assets/images/types/pdf.png";
        }

        if(type == "rar" || type == "zip")
        {
          icon = "../../assets/images/types/rar.png";
        }

        this.objects.push({id: files[i].id, name: files[i].name, type: files[i].name.substring(files[i].name.length - temp.indexOf("."), files[i].name.length), ico: icon});
      }
      else
      {
        let temp: string = "";
        let l = this.path + "/";
        for(let j = l.length; j < files[i].path.length; j++)
        {
          if(files[i].path[j] == "/")
          {
            break;
          }
          else
          {
            temp += files[i].path[j]
          }
        }
        if(dirs.find(d => d == temp) == undefined)
        {
          this.objects.push({id: "#ID" + temp, name: temp, type: "#/Dir", ico: "../../assets/images/types/folder.png"});
          dirs.push(temp);
        }
      }
    }
  }
}

interface Object 
{
  id: string;
  name: string;
  type: string;
  ico: string;
}

interface Title 
{
  title: string;
  path: string;
}
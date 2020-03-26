import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Student } from './oop/Student';
import { Course } from './oop/Course';
import { CourseFile } from './oop/CourseFile'
import { Teacher } from './oop/Teacher';
import { News } from './oop/News';
import { User } from './oop/User';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let Files: CourseFile[] = [
      {id: 'ID000001',course: 'DISA0001',name: 'file1', path: '/'},
      {id: 'ID000002',course: 'DISA0001',name: 'file2', path: '/Files'},
      {id: 'ID000003',course: 'DISA0001',name: 'file3', path: '/Others'},
      {id: 'ID000004',course: 'DISA0001',name: 'file4', path: '/Files/1'},
      {id: 'ID000005',course: 'DISA0001',name: 'file5', path: '/Others/2'},
      {id: 'ID000006',course: 'DISA0001',name: 'file6', path: '/Another/3'},
      {id: 'ID000007',course: 'DISA0002',name: 'file7', path: '/'},
      {id: 'ID000008',course: 'DISA0002',name: 'file8', path: '/Other'},
      {id: 'ID000009',course: 'DISA0002',name: 'file9', path: '/'}
    ];

    let Teachers: Teacher[] = [
      {id: "IDTEACH001", login: "teacher1", password: "password", name: "Mr. Teacher", type: "Teacher"},
      {id: "IDTEACH002", login: "teacher2", password: "password", name: "Ms. Teacher", type: "Teacher"}
    ];

    let Courses: Course[] = [
      {id: "DISA0001", name: "Discipline1", credits: 4, schedule: [ [2,0], [3,0], [4,1], [5,1] ], teacher: Teachers[0], room: "421 room"},
      {id: "DISA0002", name: "Discipline2", credits: 3, schedule: [ [2,3], [3,3], [4,3] ], teacher: Teachers[1], room: "444 room"},
      {id: "DISA0003", name: "Discipline3", credits: 2, schedule: [ [2,5], [1,6] ], teacher: Teachers[0], room: "Independent hall"}

    ];

    let News: News[] = [
      {id: "IDNEWS0001", title: "Title of this News", body: "Today was something. Bla Bla Bla ... Another texts", date: new Date()},
      {id: "IDNEWS0002", title: "Title of this News 2 \'Aaabababababa\'", body: "Someday was something. Bla Bla Bla ... Another texts", date: new Date()},
      {id: "IDNEWS0003", title: "Title of this News 3 \'Text text text text\'", body: "Yesterday was something. Bla Bla Bla ... Another texts Sample text: Hello World!", date: new Date()}
    ];
    
    let Users: User[] = [
      (<Teacher> {id: "IDTEACH001", login: "teacher1", password: "password", name: "Mr. Teacher", type: "Teacher"}),
      (<Teacher> {id: "IDTEACH002", login: "teacher2", password: "password", name: "Ms. Teacher", type: "Teacher"}),
      (<Student> {id: "IDSTUD0001", login: "student", password: "password", name: "Azat", courses: [Courses[0], Courses[1], Courses[2]], type: "Student"}),
      (<Student> {id: "IDSTUD0002", login: "student1", password: "password", name: "Student A", courses: [Courses[1], Courses[2]], type: "Student"}),
      (<Student> {id: "IDSTUD0003", login: "student2", password: "password", name: "Student B", courses: [Courses[0], Courses[1]], type: "Student"})
    ];

    return {Users, Courses, Files, News};
  }
}
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Student } from './oop/Student';
import { Course } from './oop/Course';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let Course1: Course = {
      name: "Discipline1", 
      id: "DS123", 
      credits: 4, 
      schedule: [
        [2,0],
        [3,0],
        [4,1],
        [5,1]
      ],
      courseFiles: [
        {name: "File", file: null}
      ],
      teacherName: "MyTeacher1",
      cabinet: "421 room"
    };

    let Course2: Course = {
      name: "Discipline2", 
      id: "DS456",
      credits: 3, 
      schedule: [
        [2,3],
        [3,3],
        [4,3]
      ], 
      courseFiles: [
        {name: "File", file: null}
      ],
      teacherName: "MyTeacher2",
      cabinet: "444 room"
    };

    let Course3: Course = {
      name: "Discipline3", 
      id: "DS789", 
      credits: 2, 
      schedule: [
        [2,5],
        [1,6]
      ], 
      courseFiles: [
        {name: "File", file: null}
      ],
      teacherName: "MyTeacher3",
      cabinet: "Independent Hall"
    };

    let Student1: Student = {
      id: "ID1",  
      name: "Azat",
      courses: [Course1,Course2,Course3], 
      userName: "student", 
      userPassword: "password",
      newHeaders : ["Todays News", "Yesterdays News"],
      news: ["Today was something. Bla bla bla... etc", "Yesterday was something. Bla bla bla... etc"]
    };
    
    let Student2: Student = {
      id: "ID2",  
      name: "Ayan",
      courses: [Course1,Course3], 
      userName: "ayan2005", 
      userPassword: "05052005",
      newHeaders : ["Todays News", "Yesterdays News"],
      news: ["Ayan was registered. Bla bla bla... etc", "Yesterday was something. Bla bla bla... etc"]
    };

    const Students: Student[] = [
      Student1,
      Student2
    ];
    return {Students};
  }
}
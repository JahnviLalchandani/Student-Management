import { Injectable, OnInit } from '@angular/core';
import { StudentModel } from '../student-model';

const STUDENTS :StudentModel[]= [
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's1',
    name: 'Suraj',
    age: 32,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's2',
    name: 'Rahul',
    age: 12,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's3',
    name: 'Pritesh',
    age: 23,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's4',
    name: 'Ajinkya',
    age: 38,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's5',
    name: 'Nikhil',
    age: 18,
    email: 'test@test.com',
    number: '12457654',
  },
];
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private students :StudentModel[]=STUDENTS
  constructor() { }

  getStudentList():StudentModel[]
  {
    return this.students
  }
  
}
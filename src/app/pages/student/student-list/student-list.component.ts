import { Component, OnInit } from '@angular/core';
import { StudentItemComponent } from './student-item/student-item.component';
import { ServicesService } from '../student-services/services.service';
import { StudentModel } from '../student-model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentItemComponent,NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  public students:StudentModel[]=[]
  constructor(private ServicesService:ServicesService)
   {
        
   }
   ngOnInit(): void {
    this.students=this.ServicesService.getStudentList();
    console.log(this.students);
    
  }
  deleteStudent(index:number)
  {
     this.students.splice(index,1);
  }

}

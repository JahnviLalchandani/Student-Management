import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentModel } from '../../student-model';

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss'
})
export class StudentItemComponent implements OnInit  {
    @Input() student!:StudentModel;
    @Output() DeleteClick:EventEmitter<any>=new EventEmitter();
    
   
  ngOnInit(): void {
     console.log(this.student);
     
  }
  onDeleteClick()
  {
      this.DeleteClick.emit(this.student)
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Common/Components/header/header.component';
import { FooterComponent } from './Common/Components/footer/footer.component';
import { StudentListComponent } from './pages/student/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Student-Management';
}

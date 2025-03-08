import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentFormComponent} from './student-form/student-form.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student_data_clientside';
}

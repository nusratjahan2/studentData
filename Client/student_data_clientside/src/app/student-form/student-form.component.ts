import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'] 
})
export class StudentFormComponent {
  studentForm: FormGroup;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      department: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
    
    }
  }
}

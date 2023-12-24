import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  adminForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adminForm = fb.group({
      hotelId: ['', Validators.required],
      hotelName: ['', Validators.required],
      cuisines: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  submit() {}
}

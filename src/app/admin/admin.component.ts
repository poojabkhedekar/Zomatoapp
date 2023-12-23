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
      hotelName: ['', Validators.required],
      category: ['', Validators.required],
      menu: ['', Validators.required],
      cuisines: ['', Validators.required],
      rating: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
}

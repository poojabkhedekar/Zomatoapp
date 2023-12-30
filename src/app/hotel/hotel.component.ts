import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZomatoService } from '../zomato.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent {
  hotelForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: ZomatoService,
    private toaster: ToastrService
  ) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      cuisines: ['', Validators.required],
      type: ['', Validators.required],
    });
  }
  submit() {
    let body = {
      name: this.hotelForm.controls['name'].value,
      location: this.hotelForm.controls['location'].value,
      type: this.hotelForm.controls['type'].value,
      cuisines: this.hotelForm.controls['cuisines'].value,
      time: this.hotelForm.controls['time'].value,
    };
    this.service.postcreateHotel(body).subscribe(
      (res: any) => {
        console.log('hotelpostSuccess', res);
        this.toaster.success('Hotel Added Successfully');
      },
      (error) => {
        console.log('hotelpostFails', error);
      }
    );
    this.hotelForm.reset();
  }
}

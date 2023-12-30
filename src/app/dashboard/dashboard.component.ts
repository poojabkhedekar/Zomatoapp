import { Component } from '@angular/core';
import { ZomatoService } from '../zomato.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  hotelsDetails: any;
  constructor(private service: ZomatoService) {}
  ngOnInit() {
    this.service.getHotelInfo().subscribe(
      (res: any) => {
        this.hotelsDetails = res.data;
        console.log('hoteldetails', res);
      },
      (error) => {
        console.log('hoteldetails', error);
      }
    );
  }
}

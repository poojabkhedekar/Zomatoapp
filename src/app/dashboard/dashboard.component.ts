import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  slides = [
    { image: 'path/to/image1.jpg', alt: 'Image 1' },
    { image: 'path/to/image2.jpg', alt: 'Image 2' },
    { image: 'path/to/image3.jpg', alt: 'Image 3' },
    // Add more slides as needed
  ];
}

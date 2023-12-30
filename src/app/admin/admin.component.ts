import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZomatoService } from '../zomato.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  adminForm: FormGroup;
  food: any;
  data: any;
  hotelNames: any = [];
  cusinesName: any = [];
  locationName: any = [];
  timeName: any = [];
  foodCategory: any = [];
  mainCourseName: any = [];
  dessertName: any = [];
  priceName: any = [];
  hoteldata: any;
  constructor(private fb: FormBuilder, private service: ZomatoService) {
    this.adminForm = fb.group({
      hotelName: ['', Validators.required],
      category: ['', Validators.required],

      dishesType: ['', Validators.required],
      foodType: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.service.getFoodOptions().subscribe(
      (res: any) => {
        this.food = res.data;
        this.data = this.food[0].hotelDetails;
        console.log('getFoodOptionsSuccessed', res);
      },
      (error) => {
        console.log('getFoodOptionsFailed', error);
      }
    );
    this.service.getHotelInfo().subscribe((res: any) => {
      this.hoteldata = res.data;
    });
  }
  onHotelIdSelect() {
    let selectedHotel: any = [];
    this.data.forEach((element: any) => {
      if (element.id == this.adminForm.controls['id'].value) {
        selectedHotel.push(element.name);
      }
    });
    this.hotelNames = selectedHotel;
    // this.adminForm.controls['hotelName'].setValue(this.hotelNames.toString());
  }
  onCategoryFoodSelect() {
    let selectedStarter: any = [];
    let selectedMainCourse: any = [];
    let dessertSelected: any = [];

    this.food[0].menu.forEach((element: any) => {
      if (element.category == this.adminForm.controls['category'].value) {
        selectedStarter = element.starter;
        selectedMainCourse = element.mainCourse;
        dessertSelected = element.dessert;
      }
    });
    this.foodCategory = selectedStarter;
    this.mainCourseName = selectedMainCourse;
    this.dessertName = dessertSelected;
    //
  }
  onShowFoodListClick() {
    let foodSelected: any = [];
    this.food[0].menu.forEach((element: any) => {
      if (element.type == this.adminForm.controls['type'].value) {
        foodSelected = element.starter;
      }
    });
    this.priceName = foodSelected;
    this.adminForm.controls['foodType'].setValue(this.priceName.toString());
  }

  submit() {}
}

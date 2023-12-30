import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ZomatoService {
  constructor(private httpClient: HttpClient) {}
  getFoodOptions() {
    const url = 'http://localhost:3000/getFoodsOption';
    return this.httpClient.get(url);
  }
  postcreateHotel(body: any) {
    const url = 'http://localhost:3000/createHotel';
    return this.httpClient.post(url, body);
  }
  getHotelInfo() {
    const url = 'http://localhost:3000/getHotelInfo';
    return this.httpClient.get(url);
  }
}

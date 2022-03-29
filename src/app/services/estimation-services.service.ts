import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstimationServicesService {

  API_URL = environment.API_URL + '/estimations';
  constructor(
    private http: HttpClient
  ) { }

  requestEstimation(data: any) {
    const formData = new FormData()
    for (const key in data) {
      if (key == 'images') {
        for (const img of data[key]) {
          formData.append(key, img);
        }
      } else {
        formData.append(key, data[key]);
      }
    }
    return this.http.post(`${this.API_URL}/create`, formData);
  }
}

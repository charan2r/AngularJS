import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiKey = "AIzaSyBeiPBMHkKppcfG0gUfHBa9_Df_ykTGbNw"
  private apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${this.apiKey}`;

  constructor(private http:HttpClient) { }

  getUserLocation(){
    return this.http.post(this.apiUrl, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${environment.geolocationApiKey}`;

  constructor(private http:HttpClient) { }

  getUserLocation(){
    return this.http.post(this.apiUrl, {});
  }
}

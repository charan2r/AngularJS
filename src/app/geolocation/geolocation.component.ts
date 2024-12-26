import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../geolocation.service';
import { CommonModule } from '@angular/common';

declare var google: any;

@Component({
  selector: 'app-geolocation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './geolocation.component.html',
  styleUrl: './geolocation.component.scss',
  template: `
  <div>
    <h1>Geolocation</h1>
    <button (click)="getLocation()">Get Location</button>
    <div id="map" style="height: 400px; width: 100%;"></div>
  </div>  
  `
})
export class Geolocation implements OnInit {
  ngOnInit(): void {
    this.getLocation();
  }
  constructor(private geolocationService: GeolocationService) {}
  
  getLocation(){
    this.geolocationService.getUserLocation().subscribe((data:any) => {
      const {lat, lng} = data.location;
      this.initMap(lat, lng);
    });
  }

  initMap(lat: number, lng: number) {
    const map = new google.maps.Map(document.getElementById('map')!, {
      center: { lat, lng },
      zoom: 15,
    });

    new google.maps.Marker({
      position: { lat, lng },
      map,
    });
  }

}

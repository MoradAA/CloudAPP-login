import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HomePage} from '../home/home.page'

import * as L from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  home:any
  map: L.Map;

  lat: number;
  lng: number;
  accuracy: number;
  
  constructor(private router:Router, private geo: Geolocation, private auth: AuthService) 
  { 
    this.home = new HomePage(this.router, this.auth);
  }

  ngOnInit() {
    this.map = L.map('mapRender', {
      center: [51.2197821, 4.4045223],
      zoom: 14,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'      
    }).addTo(this.map)

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    L.circle([51.2197821,4.4045223], 50).addTo(this.map);
    L.circle([51.2198821,4.4055223], 50).addTo(this.map);
    L.circle([51.2120821,4.4035223], 50).addTo(this.map);
    L.circle([51.2137821,4.4095223], 50).addTo(this.map);
    L.circle([51.2167821,4.4035223], 50).addTo(this.map);

    this.getGeoLocation();
    L.marker([51.1895, 4.3784]).addTo(this.map);
  }

  getGeoLocation(){
    this.geo.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    })
  }
}

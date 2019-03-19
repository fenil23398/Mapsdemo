import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
} from '@ionic-native/google-maps/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  map: GoogleMap;

  ionViewDidLoad() {
    console.log("Welcome to home page");
    this.loadMap();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

}

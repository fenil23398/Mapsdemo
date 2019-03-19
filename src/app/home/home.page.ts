import { Component,OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker,
  GoogleMapsEvent
} from '@ionic-native/google-maps/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

 export class HomePage implements OnInit
  {
  
  map: GoogleMap;
    
  constructor(private platform:Platform){

  }
  
  async ngOnInit() {
    console.log("Welcome to home page");
    await this.platform.ready();
    await this.loadMap();
   await  this.setplaces();
  }
 

  loadMap() {
    alert("hie from load map");
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 22.2587,
           lng: 71.1924
         },
         zoom: 7,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }


  setplaces()
  {
    this.map.addMarker({
      position:{
        lat:23.0225,
        lng:72.5714
      },
      title:"ahemdabad",
      disableAutoPan:true
    }).then(this.onMarkerAdded);

    
    this.map.addMarker({
      position:{
        lat:21.1702,
        lng:72.8311
      },
      title:"Surat",
      disableAutoPan:true
    }).then(this.onMarkerAdded);

    
    this.map.addMarker({
      position:{
        lat:22.3072,
        lng:73.1812
      },
      title:"broda",
      disableAutoPan:true
    }).then(this.onMarkerAdded);
  }

  onMarkerAdded(marker :Marker){
    marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(()=>{
      alert("Marker" +marker.getTitle() + " clicked");
    });
  }

}



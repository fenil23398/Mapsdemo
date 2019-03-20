import { Component,OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker,
  GoogleMapsEvent,
  Polyline,
  LatLng
} from '@ionic-native/google-maps/ngx';
import { logWarnings } from 'protractor/built/driverProviders';



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
    var lati=[22.015027,
      22.912793,
      22.792571,
      22.082642,
      22.79296,
      23.791235,
      23.490455,
      24.143877,
      23.912345,
      23.308555,
      21.425234,
      20.961278,
      20.885548,
      20.43495,
      21.303367,
      22.453302,
      21.090354,
      21.134892,
      22.934663,
      23.410181,
      23.61615,
      24.241335,
      23.233738,
      22.42301,
      21.664929,
      21.751451,
      22.715938,
      ];
      var selectedtoll=[73.052162,73.478457];
      var longi=[73.115049,
        72.957362,
        73.533274,
        70.781004,
        73.842845,
        71.427581,
        70.942639,
        71.977151,
        71.783983,
        70.49059,
        70.295437,
        70.334386,
        73.052162,
        72.917204,
        72.95418,
        73.070523,
        72.922502,
        73.478457,
        69.801655,
        72.828618,
        73.254472,
        72.462709,
        70.689457,
        71.088805,
        69.709536,
        70.326793,
        72.740905,
        ];
    for(var i=0;i<lati.length;i++){
     if(selectedtoll.includes(longi[i])){
      // alert("welcome in if");
      this.map.addMarker({
        icon:'blue',
        position:{
          lat:lati[i],
          lng:longi[i]
        },
        title:"ahemdabad",
        disableAutoPan:true
      }).then(this.onMarkerAdded);

     }
     else{
      this.map.addMarker({
        icon:'red',
            position:{
              lat:lati[i],
              lng:longi[i]
            },
            title:"ahemdabad",
            disableAutoPan:true
          }).then(this.onMarkerAdded);
        }
    }

  //   this.map.addMarker({
  //     position:{
  //       lat:23.0225,
  //       lng:72.5714
  //     },
  //     title:"ahemdabad",
  //     disableAutoPan:true
  //   }).then(this.onMarkerAdded);

    
  //   this.map.addMarker({
  //     position:{
  //       lat:21.1702,
  //       lng:72.8311
  //     },
  //     title:"Surat",
  //     disableAutoPan:true
  //   }).then(this.onMarkerAdded);

    
  //   this.map.addMarker({
  //     position:{
  //       lat:22.3072,
  //       lng:73.1812
  //     },
  //     title:"broda",
  //     disableAutoPan:true
  //   }).then(this.onMarkerAdded);

  this.setlinemap();
  }

  onMarkerAdded(marker :Marker){
    marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(()=>{
      alert("Marker" +marker.getTitle() + " clicked");
    });
  }

  setlinemap(){
    var road = [
      {lat: 22.015027, lng:73.115049},
      {lat: 22.912793, lng:72.957362},
      {lat: 22.792571, lng: 73.533274}
     ];

     let polyline:Polyline=this.map.addPolylineSync({
       points:road,
       color:'#AA00FF',
       width:10,
       geodesic:true,
       clickable:true
     })

     polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params:any)=>{
       let position : LatLng =<LatLng>params[0];
       let marker : Marker =this.map.addMarkerSync({
         position:position,
         title:position.toUrlValue(),
         disableAutoPan:true
       });
       marker.showInfoWindow();
     });
  }
    
}



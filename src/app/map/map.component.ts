import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import fromLatlon from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map;
  constructor() { }

  ngOnInit() {
    this.initMap()
  }

  initMap() {
    this.map= new Map ({
      target : 'map',
      layers :[
        new Tile({
          source : new OSM ()
        })
      ],
      view : new View({
        center : [34.41,8.82],
        zoom : 4
      })
    })

  }
}

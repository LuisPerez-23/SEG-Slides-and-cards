import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {addIcons} from "ionicons";
import {airplane, boat, carSport} from "ionicons/icons";
import{register} from "swiper/element/bundle";
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {


  constructor() {addIcons({airplane,carSport,boat})}
}

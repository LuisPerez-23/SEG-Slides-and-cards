import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {IonHeader, IonTitle, IonToolbar} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle
  ],
})
export class HeaderComponent  implements OnInit {
  titulo:ModelSignal<String>=model.required();

  constructor() { }

  ngOnInit() {}

}

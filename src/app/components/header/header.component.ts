import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {IonBackButton, IonButton, IonHeader, IonTitle, IonToolbar} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButton
  ],
})
export class HeaderComponent  implements OnInit {
  titulo:ModelSignal<String>=model.required();

  constructor() { }

  ngOnInit() {}

}

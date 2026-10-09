import {ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBadge,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonItem, IonItemOption, IonItemOptions,
  IonItemSliding,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {Vehiculo} from "../../common/interfaces";
import {DataService} from "../../services/data";

@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.page.html',
  styleUrls: ['./aviones.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonCard, IonItemSliding, IonItem, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItemOption, IonBadge, IonItemOptions],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvionesPage implements OnInit {
  aviones: Vehiculo []=[];
  private dataService= inject(DataService);
  private cdr=inject(ChangeDetectorRef);


  constructor() { }

  ngOnInit() {
    this.cargarAviones();
  }

  private cargarAviones() {
    this.dataService.getAviones().subscribe({
      next:(respuesta:any)=>{
        console.log("auditoria",respuesta);
        this.aviones = respuesta.data;
        this.cdr.detectChanges();
      },
      error:(err)=>{console.log("Error al cargar el avion",err)}
    })
  }
}

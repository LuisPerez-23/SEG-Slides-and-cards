import {ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBadge,
  IonCard,
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
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
  selector: 'app-barco',
  templateUrl: './barco.page.html',
  styleUrls: ['./barco.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonCard, IonItemSliding, IonCardContent, IonItem, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItemOption, IonBadge, IonItemOptions],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarcoPage implements OnInit {
  barcos:Vehiculo[]=[];
  private dataService=inject(DataService);
  private cdr=inject(ChangeDetectorRef);


  constructor() {

  }

  ngOnInit() {
    this.cargarBarcos();

  }

  private cargarBarcos() {
    this.dataService.getBarcos().subscribe({
      next: (respuesta:any) => {
        console.log("auditoria",respuesta);
        this.barcos=respuesta.data;
        this.cdr.detectChanges();

      },
      error: (err) => {console.log("Error al cargar los barcos ",err)}
    })

  }
}

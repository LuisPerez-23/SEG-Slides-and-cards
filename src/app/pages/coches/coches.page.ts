import {ChangeDetectorRef, Component, inject, OnInit,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonItem, IonItemOption,
  IonItemSliding,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {Vehiculo} from "../../common/interfaces";
import {DataService} from "../../services/data";

@Component({
  selector: 'app-coches',
  templateUrl: './coches.page.html',
  styleUrls: ['./coches.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonCard, IonItemSliding, IonItem, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItemOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CochesPage implements OnInit {
  coches: Vehiculo[]=[];

  private  dataService=inject(DataService);
  private cdr=inject(ChangeDetectorRef);

  constructor() { }

  ngOnInit() {
    this.cargarCoches();
  }

  private cargarCoches() {
    this.dataService.getCoches().subscribe({
      next:(respuesta:any) => {
        console.log('auditoria',respuesta);

        this.coches = respuesta.data;
        this.cdr.detectChanges();
      },
      error:(err) => console.error('Error al cargar el coche:',err)
    })
  }
}

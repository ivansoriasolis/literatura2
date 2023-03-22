import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TextoModule } from '../texto/texto.module';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule, //barra de tareas de angular material
    TextoModule,
    MatButtonModule,
  ]
})
export class DashboardModule { }

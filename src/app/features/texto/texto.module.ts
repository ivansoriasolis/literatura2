import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextoRoutingModule } from './texto-routing.module';
import { TextoComponent } from './texto.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ListComponent } from './components/list/list.component';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [
    TextoComponent,
    FormComponent,
    ListComponent,
    DetailComponent
  ],
  exports: [TextoComponent],
  imports: [
    CommonModule,
    TextoRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ]
})
export class TextoModule { }

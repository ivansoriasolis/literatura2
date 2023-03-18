import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextoComponent } from './texto.component';

const routes: Routes = [{ path: '', component: TextoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextoRoutingModule { }

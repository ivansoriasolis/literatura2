import { Component, OnInit } from '@angular/core';
import { Texto } from './interfaces/texto.interface';
import { Observable, filter, tap, Subject } from 'rxjs';
import { TextosFirestoreService } from 'src/app/core/services/textos-firestore.service';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {
  allTexto$: Observable<Texto[]>; //flujo que recibe todos los textos registrados
  selectedTexto?: Texto;
  destroyed$ = new Subject<void>();  //tipo especial de observable que se suscribe a muchos observables

  constructor(
    private readonly textosService: TextosFirestoreService,
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.allTexto$ = this.textosService.getAll(); //pide todos los registros de textos
  }

  addTexto() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((texto) => this.textosService.create(texto)))
      .subscribe();
  }

  updateTexto() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedTexto },
      width: '40%',
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((texto) => this.textosService.update(texto)),
        tap((texto) => this.selectTexto(texto))
      )
  }

  selectTexto(texto: Texto) {
    this.selectedTexto = texto;
  }

  deleteTexto() {
    this.textosService.delete(this.selectedTexto!.id);
    this.selectedTexto = undefined;
  }
}

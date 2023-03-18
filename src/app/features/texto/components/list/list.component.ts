import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Texto } from '../../interfaces/texto.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() texto$: Observable<Texto[]>;
  @Output() textoEmitter = new EventEmitter<Texto>();

  constructor() { }

  ngOnInit(): void { }

  selectTexto(texto: Texto) {
    this.textoEmitter.emit(texto);
  }
}

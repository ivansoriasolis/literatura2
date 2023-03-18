import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Texto } from '../../interfaces/texto.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() texto!: Texto;
  @Output() updateTexto = new EventEmitter<void>();
  @Output() deleteTexto = new EventEmitter<void>();

  constructor() {

  }

  update() {
    this.updateTexto.emit();
  }

  delete() {
    this.deleteTexto.emit();
  }
}

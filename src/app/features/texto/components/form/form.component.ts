import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Texto } from '../../interfaces/texto.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly texto: Texto,
  ) {
    this.form = this.formBuilder.group(
      {
        titulo: [this.texto.titulo, [Validators.required]],
        texto: [this.texto.texto, [Validators.required]],
        tipo: [this.texto.tipo, [Validators.required]],
        fuente: [this.texto.fuente, [Validators.required]],
        informante: [this.texto.informante, [Validators.required]],
      }
    );
  }

  // setForm() {
  //   this.form = this.formBuilder.group(
  //     {
  //       name: [this.texto.titulo, [Validators.required]],
  //       name: [this.texto.titulo, [Validators.required]],
  //       name: [this.texto.titulo, [Validators.required]],
  //       name: [this.texto.titulo, [Validators.required]],
  //       name: [this.texto.titulo, [Validators.required]],
  //       name: [this.texto.titulo, [Validators.required]],
  //     }
  //   );
  // }

  submit() {
    this.dialogRef.close({ ...this.texto, ...this.form.value });
  }
}

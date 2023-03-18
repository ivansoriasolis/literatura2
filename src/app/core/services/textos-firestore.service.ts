import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, collection } from '@firebase/firestore';

import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Texto } from 'src/app/features/texto/interfaces/texto.interface';

@Injectable({
  providedIn: 'root'
})
export class TextosFirestoreService {

  private textosCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.textosCollection = collection(this.firestore, 'texto');
  }

  getAll() {
    console.log("OBTENIENDO TODO");
    return collectionData(this.textosCollection, {
      idField: 'id',
    }) as Observable<Texto[]>;
  }

  get(id: string) {
    const textDocumentReference = doc(this.firestore, `texto/${id}`);
    return docData(textDocumentReference, { idField: 'id' });
  }

  create(texto: Texto) {
    return addDoc(this.textosCollection, texto);
  }

  update(texto: Texto) {
    const textDocumentReference = doc(this.firestore, `texto/${texto.id}`);
    return updateDoc(textDocumentReference, { ...texto });
  }

  delete(id: string) {
    const textDocumentReference = doc(this.firestore, `texto/${id}`);
    return deleteDoc(textDocumentReference);
  }

}

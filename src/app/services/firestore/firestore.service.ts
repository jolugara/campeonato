import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo gato
  public createEquipo(data: {nombre: string, url: string}) {
    return this.firestore.collection('campeonato').add(data);
  }
  //Obtiene un gato
  public getPartidos(documentId: string) {
    return this.firestore.collection('campeonato').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getCResultados() {
    return this.firestore.collection('campeonato').snapshotChanges();
  }
  //Actualiza un gato
  public updateClasificacion(documentId: string, data: any) {
    return this.firestore.collection('campeonato').doc(documentId).set(data);
  }
}

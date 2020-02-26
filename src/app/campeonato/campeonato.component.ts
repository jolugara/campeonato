import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.css']
})
export class CampeonatoComponent implements OnInit {
  public campeonato = [];
  constructor(
    private firestoreService: FirestoreService
  ) { }
  ngOnInit() {
    this.firestoreService.getCResultados().subscribe((catsSnapshot) => {
      this.campeonato = [];
      catsSnapshot.forEach((catData: any) => {
        this.campeonato.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
    });
  }
}

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
    this.firestoreService.getCResultados().subscribe((campeonatoSnapshot) => {
      this.campeonato = [];
      campeonatoSnapshot.forEach((campeonatoData: any) => {
        this.campeonato.push({
          id: campeonatoData.payload.doc.id,
          data: campeonatoData.payload.doc.data()
        });
      });
    });
  }
}

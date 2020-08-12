import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Livro } from 'src/model/livro';

@Component({
  selector: 'app-livro-busca-titulo',
  templateUrl: './livro-busca-titulo.component.html',
  styleUrls: ['./livro-busca-titulo.component.css']
})
export class LivroBuscaTituloComponent implements OnInit {

  name: string = '';
  busca : string = '';
  itens: any[] = [];
  resultados : boolean = false;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {

  }

  ngOnInit(): void {

  }

  addLivro(livro: Livro) {
    this.storage.storage.ref().child(`livro/${livro.id}.jpg`).getDownloadURL().then(data => {
      livro.imgUrl = data;
      this.itens.push(livro);
    }).catch(data => {
      this.itens.push(livro);
    })
  }

  buscar() {
    if (this.name.length > 0) {

      this.itens = [];
      this.busca = this.name;
      this.resultados = false;

      var livroRef = this.firestore.collection("livro",
        ref => ref.orderBy("titulo").startAt(this.name).endAt(this.name + "\uf8ff"));

      livroRef.snapshotChanges().subscribe(data => {
        data.map(a => {
          this.itens = [];
          let livro: Livro = a.payload.doc.data() as Livro;
          livro.id = a.payload.doc.id as string;
          this.addLivro(livro);
          this.resultados = true;
        })
      })
    }
    
  }
}

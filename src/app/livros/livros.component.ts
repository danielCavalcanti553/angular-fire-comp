import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/model/livro';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  itens : any[] = [];

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    
  }

  ngOnInit(): void {
    this.firestore.collection('livro').snapshotChanges().subscribe(data=>{
      data.map(a=>{
        let livro : Livro = a.payload.doc.data() as Livro;
        livro.id = a.payload.doc.id as string;
        this.addLivro(livro);
      })
      console.log(this.itens);
    })

  }

  addLivro(livro : Livro){
    this.storage.storage.ref().child(`livro/${livro.id}.jpg`).getDownloadURL().then(data=>{
      livro.imgUrl = data;
      this.itens.push(livro);
    }).catch(data=>{
      this.itens.push(livro);
    })
  }

}

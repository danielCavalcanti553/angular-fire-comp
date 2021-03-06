import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/model/livro';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-livros-view',
  templateUrl: './livros-view.component.html',
  styleUrls: ['./livros-view.component.css']
})
export class LivrosViewComponent implements OnInit {
  livro : Livro = new Livro();
  urlImage : any;
  constructor(private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private storage : AngularFireStorage,
    private router: Router) {
    }

  ngOnInit(): void {

    this.route.paramMap.subscribe(resp=>{

      let id = resp.get('id');

      this.firestore.collection('livro').doc(id).snapshotChanges().subscribe(data=>{
        this.livro = data.payload.data() as Livro;
        this.livro.id = data.payload.id;
        this.download();
      })
    })

    
  }


  download(){
    this.storage.storage.ref().child(`livro/${this.livro.id}.jpg`).getDownloadURL().then(data=>{
      console.log(data);
      this.urlImage = data;
    })
  }

}

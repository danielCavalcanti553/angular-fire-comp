import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from 'src/model/livro';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-livro-imagem',
  templateUrl: './livro-imagem.component.html',
  styleUrls: ['./livro-imagem.component.css']
})
export class LivroImagemComponent implements OnInit {

  livro : Livro = new Livro();
  image : any;
  urlImage : any;

  constructor(private firestore: AngularFirestore, 
    private storage : AngularFireStorage,
    private route: ActivatedRoute)  {
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

  upload(event){

    this.image = event.srcElement.files[0];

    this.storage.storage.ref().child(`livro/${this.livro.id}.jpg`).put(this.image).then(data=>{
      this.download();
    })
  }

  download(){
    this.storage.storage.ref().child(`livro/${this.livro.id}.jpg`).getDownloadURL().then(data=>{
      console.log(data);
      this.urlImage = data;
    })
  }

}

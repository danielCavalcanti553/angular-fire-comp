import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/model/livro';

@Component({
  selector: 'app-livros-delete',
  templateUrl: './livros-delete.component.html',
  styleUrls: ['./livros-delete.component.css']
})
export class LivrosDeleteComponent implements OnInit {

  livro : Livro = new Livro();

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router : Router)  {
      
  }


  ngOnInit(): void {
      
    
    this.route.paramMap.subscribe(resp=>{

      let id = resp.get('id');

      this.firestore.collection('livro').doc(id).snapshotChanges().subscribe(data=>{
        this.livro = data.payload.data() as Livro;
        this.livro.id = data.payload.id;
        
      })
    })
  }
  
  excluir(){
    this.firestore.collection('livro').doc(this.livro.id).delete().then(()=>{
      this.router.navigate(['/livros']);
    })
  }

}

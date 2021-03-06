import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-livros-new',
  templateUrl: './livros-new.component.html',
  styleUrls: ['./livros-new.component.css']
})
export class LivrosNewComponent implements OnInit {

  formGroup : FormGroup;
  message : string = null;

  constructor(
    private formBuilder : FormBuilder, private firestore: AngularFirestore)  {
      this.iniciarForm();
    }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      titulo : ['',[Validators.required]],
      autor: ['', [Validators.required]],
      editora: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      preco: ['', [Validators.required]]
   

    })
  }

  onSubmit(){
  
    console.log(this.formGroup.value); 
  
    this.firestore.collection('livro').add(this.formGroup.value).then(() =>{
            this.message = "Cadastrado com sucesso!";
            this.formGroup.reset();
          }).catch(()=>{
            this.message = "Erro ao cadastrar"; 
          })

    
  }

}

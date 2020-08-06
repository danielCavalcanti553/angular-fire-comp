import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent implements OnInit {


  formGroup : FormGroup;
  message : string = null;

  constructor(
    private formBuilder : FormBuilder, private auth: AngularFireAuth, private router : Router,)  {
      this.iniciarForm();
    }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }

  onSubmit(){
  
   

    this.auth.createUserWithEmailAndPassword(
      this.formGroup.controls['email'].value,this.formGroup.controls['email'].value).then(() =>{
            this.router.navigate(['livros']);
            this.formGroup.reset();
          }).catch(()=>{
            this.message = "Erro ao cadastrar"; 
          })

    
  }


}

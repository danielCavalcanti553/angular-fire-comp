import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LivrosNewComponent } from './livros-new/livros-new.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LivrosComponent } from './livros/livros.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import localePt from '@angular/common/locales/pt'; // Local
import { registerLocaleData } from '@angular/common';
import { LivrosViewComponent } from './livros-view/livros-view.component';
import { LivrosUpdateComponent } from './livros-update/livros-update.component';
import { LivrosDeleteComponent } from './livros-delete/livros-delete.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { LivroImagemComponent } from './livro-imagem/livro-imagem.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LivroBuscaTituloComponent } from './livro-busca-titulo/livro-busca-titulo.component'; // Local

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    LivrosNewComponent,
    LivrosComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    LivrosViewComponent,
    LivrosUpdateComponent,
    LivrosDeleteComponent,
    UsuarioNewComponent,
    LivroImagemComponent,
    PerfilComponent,
    LivroBuscaTituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

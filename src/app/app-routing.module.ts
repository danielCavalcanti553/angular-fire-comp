import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosNewComponent } from './livros-new/livros-new.component';
import { LivrosComponent } from './livros/livros.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LogoutComponent } from './logout/logout.component';
import { LivrosViewComponent } from './livros-view/livros-view.component';
import { LivrosUpdateComponent } from './livros-update/livros-update.component';
import { LivrosDeleteComponent } from './livros-delete/livros-delete.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { LivroImagemComponent } from './livro-imagem/livro-imagem.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LivroBuscaTituloComponent } from './livro-busca-titulo/livro-busca-titulo.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/new', component: UsuarioNewComponent },
  { 
    path: 'livros', 
    component: LivrosComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
    path: 'livros/busca/titulo', 
    component: LivroBuscaTituloComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  { 
    path: 'livros/new', 
    component: LivrosNewComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'livros/imagem/:id', 
    component: LivroImagemComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
    path: 'livros/:id', 
    component: LivrosViewComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
    path: 'livros/delete/:id', 
    component: LivrosDeleteComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
    path: 'livros/update/:id', 
    component: LivrosUpdateComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
    path: 'perfil', 
    component: PerfilComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
    path: 'logout', 
    component: LogoutComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { FuncaoComponent } from './components/pages/funcao/funcao.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LogComponent } from './components/log/log.component';
import { PapeisComponent } from './components/pages/papeis/papeis.component';
import { PerfilusuarioComponent } from './components/pages/perfilusuario/perfilusuario.component';
import { SetorComponent } from './components/pages/setor/setor.component';
import { SistemasComponent } from './components/pages/sistemas/sistemas.component';
import { TipousuarioComponent } from './components/pages/tipousuario/tipousuario.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovousuarioComponent } from './components/pages/usuarios/novousuario/novousuario.component';
import { NovotipousuarioComponent } from './components/pages/tipousuario/novotipousuario/novotipousuario.component';
import { NovosetorComponent } from './components/pages/setor/novosetor/novosetor.component';
import { NovofuncaoComponent } from './components/pages/funcao/novofuncao/novofuncao.component';
import { NovopapeisComponent } from './components/pages/papeis/novopapeis/novopapeis.component';
import { NovoperfilusuarioComponent } from './components/pages/perfilusuario/novoperfilusuario/novoperfilusuario.component';
import { NovosistemaComponent } from './components/pages/sistemas/novosistema/novosistema.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'tipousuario', component: TipousuarioComponent},
  {path: 'setor', component: SetorComponent},
  {path: 'funcao', component: FuncaoComponent},
  {path: 'perfilusuario', component: PerfilusuarioComponent},
  {path: 'sistemas', component: SistemasComponent},
  {path: 'papeis', component: PapeisComponent},
  {path: 'log', component: LogComponent},
  {path: 'novousuario', component: NovousuarioComponent},
  {path: 'novotipousuario', component: NovotipousuarioComponent},
  {path: 'novosetor', component:NovosetorComponent},
  {path: 'novofuncao', component: NovofuncaoComponent},
  {path: 'novopapeis', component: NovopapeisComponent},
  {path: 'novoperfilusuario', component:NovoperfilusuarioComponent},
  {path: 'novosistema', component: NovosistemaComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ArtigosComponent } from './paginas/artigos/artigos.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { AtividadeComponent } from './paginas/atividade/atividade.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'artigos',
    component: ArtigosComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'atividade',
    component: AtividadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './paginas/home/HomeComponent';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { AtividadeComponent } from './paginas/atividade/atividade.component';
import { ArtigosComponent } from './paginas/artigos/artigos.component';
import { ScrollToModule } from '@andrei4ik/ngx-scroll-to';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'atividade', component: AtividadeComponent },
  { path: 'home', component: HomeComponent } // Defina seu componente Home aqui
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    AtividadeComponent,
    ArtigosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

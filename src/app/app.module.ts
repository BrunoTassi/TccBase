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
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent {

  constructor() { }

  ngOnInit(): void {
    //document.addEventListener('DOMContentLoaded', () => {
    //  // Selecione e role até o destino
    //  this.scrollToDestination();
    //});
  }

  //scrollToDestination() {
  //  const destino = document.querySelector('#secao01');
  //  if (destino) {
  //    destino.scrollIntoView({
  //      behavior: 'smooth'
  //    });
  //  }
  //}
}

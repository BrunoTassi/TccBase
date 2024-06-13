import { Component, ElementRef, HostListener } from '@angular/core';
import { Modal } from 'bootstrap';
import Usuario from '../../../../classes/usuario';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
const openModalButton = document.getElementById('openModalButton');



@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent {

  nome: string = '';
  cpf: string = '';
  email: string = '';
    usuarioService: any;
 
  onSubmit() {
    console.log("Nome:", this.nome);
    console.log("CPF:", this.cpf);
    console.log("Email:", this.email);
  }

  constructor(private el: ElementRef, private router: Router, private http: HttpClient) {
    if (openModalButton) { // Verificar se o elemento foi encontrado
      openModalButton.addEventListener('click', function () {
        // Selecionar o elemento do modal pelo ID
        const modalElement = document.getElementById('exampleModal');
        if (modalElement) { // Verificar se o elemento do modal foi encontrado
          // Criar uma instância de Modal passando o elemento do modal
          const modalInstance = new Modal(modalElement);
          // Mostrar o modal
          modalInstance.show();
        }
      });
    }
  }

  salvarDadosUsuario() {

    const usuario = { nome: this.nome, cpf: this.cpf, email: this.email };    // Chama o serviço para salvar os dados do usuário

    this.http.post('http://localhost:3000/api/usuarios', usuario).subscribe(() => {
      this.router.navigate(['/home']);

    }, (error: HttpErrorResponse) => {
      console.error('Erro ao salvar os dados do usuário:', error);
    });

  }



}

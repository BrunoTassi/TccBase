import { Component, ElementRef, HostListener } from '@angular/core';
import { Modal } from 'bootstrap';
import Usuario from '../../../../classes/usuario';
import { Route, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
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

  constructor(private el: ElementRef, private router: Router) {
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

    const usuario = new Usuario(this.nome, this.cpf, this.email);
    // Chama o serviço para salvar os dados do usuário
    this.usuarioService.addUsuario(usuario).subscribe(() => {
      // Redireciona para a página Home após salvar
      this.router.navigate(['/home']);
    }, (error: HttpErrorResponse) => {
      console.error('Erro ao salvar os dados do usuário:', error);
    });

    //const nome = (document.getElementById('nome') as HTMLInputElement).value;
    //const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    //const email = (document.getElementById('email') as HTMLInputElement).value;

    //// Cria uma instância da classe Usuario com os dados do formulário
    //const usuario = new Usuario(nome, cpf, email);

    //// Armazena os dados na instância de Usuario
    //Usuario.dadosUsuario = usuario;

    //// Redireciona para a página Home
    //window.location.href = 'Home.html';
  }



}

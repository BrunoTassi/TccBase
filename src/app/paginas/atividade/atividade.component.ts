import { Component, ElementRef, HostListener } from '@angular/core';
import { Modal } from 'bootstrap';
import Usuario from '../../../../classes/usuario';

const openModalButton = document.getElementById('openModalButton');



@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent {

  constructor(private el: ElementRef) {
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
  const nome = (document.getElementById('nome') as HTMLInputElement).value;
  const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;

  // Cria uma instância da classe Usuario com os dados do formulário
  const usuario = new Usuario(nome, cpf, email);

  // Armazena os dados na instância de Usuario
  Usuario.dadosUsuario = usuario;

  // Redireciona para a página Home
  window.location.href = 'Home.html';
}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (isNaN(Number(key)) && key !== 'Backspace' && key !== 'Delete') {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const valor = input.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos

    if (valor.length > 11) {
      input.value = valor.slice(0, 11); // Limita a 11 dígitos
    }
  }



}

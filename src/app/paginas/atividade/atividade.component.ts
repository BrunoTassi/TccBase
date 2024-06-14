import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  salvarDadosUsuario() {
    const usuario = { nome: this.nome, cpf: this.cpf, email: this.email };

    this.usuarioService.salvarUsuario(usuario).subscribe(
      response => {
        console.log('Usuário salvo com sucesso:', response);
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        console.error('Erro ao salvar os dados do usuário:', error);
      }
    );
  }
}

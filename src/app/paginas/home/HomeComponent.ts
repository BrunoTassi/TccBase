import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    if(Usuario: { dadosUsuario: { nome: any; cpf: any; email: any; }; }, dadosUsuario: any) {
        console.log(Usuario.dadosUsuario.nome);
        console.log(Usuario.dadosUsuario.cpf);
        console.log(Usuario.dadosUsuario.email);
    }
}

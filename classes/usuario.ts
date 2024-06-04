
class Usuario {
  nome: string;
  cpf: string;
  email: string;

  static dadosUsuario: Usuario;

  constructor(nome: string, cpf: string, email: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
  }
}

export default Usuario;

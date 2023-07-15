class Autenticar {
  constructor() {
    this._users = [
      {
        user: "Mateus",
        pass: "1234",
      },
      {
        user: "Joao",
        pass: "Joaozinho",
      },
    ];
  }

  validar(email, senha) {
    for (let i = 0; i < this._users.length; i++) {
      if (this._users[i].user === email && this._users[i].pass === senha) {
        return console.log("Logado com sucesso!");
      }
    }
    return false;
  }

  adicionarUsuario(user, pass) {
    this._users.push({
      user: user,
      pass: pass,
    });
  }
}

const auth = new Autenticar();
auth.adicionarUsuario("John", "Lima");
auth.adicionarUsuario("Gustavo", "Bernado");

const email = "Mateus";
const senha = "1234";
const validar = auth.validar(email, senha);

class viaCep {
  constructor() {
    this.cepInput = document.getElementById("cep");
    this.enderecoInput = document.getElementById("endereco");
    this.bairroInput = document.getElementById("bairro");
    this.cidadeInput = document.getElementById("cidade");
    this.estadoInput = document.getElementById("estado");
    this.btn = document.getElementById("btn");
    this.btn.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validarCep();
    });
    this.cepInput.addEventListener("focusout", this.pesquisarCep);
  }

  preencher(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
  }

  pesquisarCep = async () => {
    this.cep = this.cepInput.value;
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;
    try {
      const dados = await fetch(url);
      const endereco = await dados.json();

      if (endereco.hasOwnProperty("erro")) {
        this.enderecoInput.value = "CEP Não encontrado";
        this.bairroInput.value = "";
        this.estadoInput.value = "";
        this.cidadeInput.value = "";
      } else {
        this.preencher(endereco);
      }
    } catch (error) {
      console.log(error);
    }
  };
  validarCep() {
    const cepValue = this.cepInput.value;
    if (isNaN(cepValue) || cepValue.length < 8) {
      alert("Erro");
    }
  }
}

const via = new viaCep();

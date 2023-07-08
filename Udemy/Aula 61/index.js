//Super class
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Agência/conta: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
Object.setPrototypeOf(CC.prototype, Conta.prototype);

CC.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
Object.setPrototypeOf(CP.prototype, Conta.prototype);

const cp = new CP('0007', '123', 0);
cp.depositar(50);
cp.sacar(50);
cp.sacar(10);
console.log(cp);

const contaC = new CC(11, 22, 0, 100);
contaC.depositar(700);
console.log(contaC);



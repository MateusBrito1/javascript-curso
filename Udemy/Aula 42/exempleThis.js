const agents = {
  name: "raze",
  role: "duelist",
  kda: 5.2,

  Agent() {
    const { name, role, kda } = this;
    return `${this.name} ${this.role} ${this.kda}`;
  },
  printBio() {
    const myAgent = this.Agent();
    console.log(`${myAgent}`);
  },
};

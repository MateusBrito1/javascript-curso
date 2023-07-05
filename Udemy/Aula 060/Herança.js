function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (amount) {
  this.price += amount;
};

Product.prototype.discount = function (amount) {
  this.price -= amount;
};

function Tshirt(name, price, color, size) {
  Product.call(this, name, price);
  this.color = color;
  this.size = size;
}

function Mug(name, price, material, stock) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, "stock", {
    enumerable: true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function () {
      if (typeof value !== "number") return;
      stock = value;
    },
  });
} 

function increase() {
  Tshirt.prototype.increase = function (percentage) {
    this.price = this.price + this.price * (percentage / 100);
  };

  Mug.prototype.increase = function (percentage) {
    this.price = this.price + this.price * (percentage / 100);
  };
}

function discount() {
  Tshirt.prototype.discount = function (amount) {
    this.price -= amount;
  };

  Mug.prototype.discount = function (amount) {
    this.price -= amount;
  };
}

const mug = new Mug("Mug", 15, "Plastic", 5);
const product = new Product("Products below", 0);
const tshirt = new Tshirt("High Company", 150, "Black", "XGG");

Object.setPrototypeOf(Tshirt.prototype, Product.prototype);
Object.setPrototypeOf(Mug.prototype, Product.prototype);

increase();
discount();

mug.increase(1000);
tshirt.increase(50);

console.log(product);
console.log(tshirt);
console.log(mug);
console.log(mug.stock);

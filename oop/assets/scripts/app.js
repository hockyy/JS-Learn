class Product {
  title = "DEFAULT";
  imageURL;
  price;
  description;
  constructor(title, imageURL, price, description) {
    this.title = title;
    this.imageURL = imageURL;
    this.price = price;
    this.description = description;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.shopmarriott.com/images/products/v2/xlrg/Marriott-The-Marriott-Pillow-MAR-108-L_xlrg.jpg",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A carpet",
      "https://images-na.ssl-images-amazon.com/images/I/71T3ugx%2B%2BSL._AC_SX522_.jpg",
      89.99,
      "A soft carpet you might like - or not"
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      prodList.append(productItem.render());
    }
    return prodList;
  }
}

class ShoppingCart {
  total = 0;
  totalElements;
  items = [];

  addProduct(product){
    this.items.push(product);
    this.total += product.price;
    this.totalElements.innerHTML = `Total: \$${this.total.toFixed(2)}  `;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2> Total: \$${this.total} </h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalElements = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageURL}" alt = "${this.product.title}">
          <div class = "product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button> Add to Cart </button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addItemHandler.bind(this));
    return prodEl;
  }
  addItemHandler() {
    console.log("Adding");
    console.log(this.product);
    App.addProductToCart(this.product);
  }
}

class Shop {

  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const productList = new ProductList();
    renderHook.append(this.cart.render());
    renderHook.append(productList.render());
  }
}

class App{
  static cart;
  static init(){
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();
class InventoryManager {
  constructor() {
    this.products = [];
  }

  addProduct(name, price, quantity) {
    if (this.products.find((p) => p.name === name)) {
      throw new Error('Product already exists');
    }
    this.products.push({ name, price, quantity });
  }

  removeProduct(name) {
    const index = this.products.findIndex((p) => p.name === name);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
  }

  updateProduct(name, newData) {
    const product = this.products.find((p) => p.name === name);
    if (!product) {
      throw new Error('Product not found');
    }
    if (newData.price !== undefined) product.price = newData.price;
    if (newData.quantity !== undefined) product.quantity = newData.quantity;
  }

  listProducts() {
    return this.products;
  }
}

module.exports = InventoryManager;

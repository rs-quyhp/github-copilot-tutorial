class InventoryManager {
  constructor() {
    this.products = [];
  }

  /**
   * Adds a new product to the inventory.
   * @param {string} name - The name of the product.
   * @param {number} price - The price of the product.
   * @param {number} quantity - The quantity of the product.
   * @throws Will throw an error if the product already exists.
   */
  /**
   * Removes a product from the inventory by name.
   * @param {string} name - The name of the product to remove.
   * @throws Will throw an error if the product is not found.
   */
  removeProduct(name) {
    const index = this.products.findIndex((p) => p.name === name);
    if (index === -1) {
      console.error(`Product "${name}" not found`);
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
  }

  /**
   * Updates an existing product's price and/or quantity.
   * @param {string} name - The name of the product to update.
   * @param {{price?: number, quantity?: number}} newData - An object containing the new price and/or quantity.
   * @throws Will throw an error if the product is not found.
   */
  updateProduct(name, newData) {
    const product = this.products.find((p) => p.name === name);
    if (!product) {
      throw new Error('Product not found');
    }
    if (newData.price !== undefined) {
      product.price = newData.price;
    }
    if (newData.quantity !== undefined) {
      product.quantity = newData.quantity;
    }
  }

  listProducts() {
    return this.products;
  }
}

module.exports = InventoryManager;

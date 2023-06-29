export function calculateCartTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function filterProductsByPrice(products, maxPrice) {
    if (typeof maxPrice !== 'number') {
      throw new TypeError('maxPrice must be a number');
    }
    if (!Array.isArray(products)) {
      throw new TypeError('products must be an array');
    }
    return products.filter(product => product.price < maxPrice);
  }


  
  


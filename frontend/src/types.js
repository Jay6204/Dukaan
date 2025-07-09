/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} imageUrl
 * @property {string} category
 */

/**
 * @typedef {Object} CartItem
 * @property {Product} product
 * @property {number} quantity
 */

/**
 * @typedef {Object} Cart
 * @property {{ [productId: number]: CartItem }} items
 * @property {number} totalPrice
 */

/** @typedef {import('../types').Cart} Cart */
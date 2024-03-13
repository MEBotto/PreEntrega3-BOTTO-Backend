import CartDAO from "./dao/mongo/cart.dao.js";
import ProductDAO from "./dao/mongo/product.dao.js";
import MessageDAO from "./dao/mongo/message.dao.js";
import UserDAO from "./dao/mongo/users.dao.js";

import CartRepository from "./repository/cart.repository.js";
import ProductRepository from "./repository/product.repository.js";
import MessageRepository from "./repository/message.repository.js";
import UserRepository from "./repository/user.repository.js";

// Generamos instancias de las clases DAO
const cartDao = new CartDAO();
const productDao = new ProductDAO();
const messageDao = new MessageDAO();
const userDao = new UserDAO();

export const cartService = new CartRepository(cartDao);
export const productService = new ProductRepository(productDao);
export const messageService = new MessageRepository(messageDao);
export const userService = new UserRepository(userDao);
/**
 * Almacenamiento en memoria para usuarios.
 * Proporciona operaciones CRUD básicas sin dependencia de base de datos externa.
 */

let users = [];
let nextId = 1;

/**
 * Crea un nuevo usuario.
 * @param {Object} userData - Datos del usuario.
 * @returns {Object} Usuario creado con su id asignado.
 */
function create(userData) {
  const user = { id: nextId++, ...userData };
  users.push(user);
  return user;
}

/**
 * Busca un usuario por email (insensible a mayúsculas).
 * @param {string} email
 * @returns {Object|undefined}
 */
function findByEmail(email) {
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

/**
 * Busca un usuario por id.
 * @param {number} id
 * @returns {Object|undefined}
 */
function findById(id) {
  return users.find((u) => u.id === id);
}

/**
 * Retorna todos los usuarios (sin contraseña).
 * @returns {Object[]}
 */
function findAll() {
  return users.map(({ password, ...rest }) => rest);
}

/**
 * Reinicia el almacenamiento (útil para pruebas).
 */
function reset() {
  users = [];
  nextId = 1;
}

module.exports = { create, findByEmail, findById, findAll, reset };

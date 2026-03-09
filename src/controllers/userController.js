const bcrypt = require('bcryptjs');
const userStore = require('../models/userStore');
const bitacora = require('../utils/bitacora');
const { VALID_ROLES } = require('../models/roles');

const SALT_ROUNDS = 10;

/**
 * POST /api/users
 * Crea un nuevo usuario con rol asignado.
 */
async function createUser(req, res) {
  const { nombre, email, password, rol } = req.body;

  // Validación de campos obligatorios
  if (!nombre || !email || !password || !rol) {
    return res.status(400).json({
      error: 'Los campos nombre, email, password y rol son obligatorios.',
    });
  }

  // Validación de rol
  if (!VALID_ROLES.includes(rol)) {
    return res.status(400).json({
      error: `El rol debe ser uno de: ${VALID_ROLES.join(', ')}.`,
    });
  }

  // Validación de duplicados
  if (userStore.findByEmail(email)) {
    return res.status(409).json({
      error: 'Ya existe un usuario con ese email.',
    });
  }

  // Cifrado de contraseña
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Persistencia
  const newUser = userStore.create({
    nombre,
    email,
    password: hashedPassword,
    rol,
  });

  // Registro en bitácora
  bitacora.registrar('CREAR_USUARIO', {
    userId: newUser.id,
    email: newUser.email,
    rol: newUser.rol,
  });

  const { password: _, ...userResponse } = newUser;
  return res.status(201).json(userResponse);
}

/**
 * GET /api/users
 * Retorna todos los usuarios (sin contraseña).
 */
function getUsers(req, res) {
  return res.status(200).json(userStore.findAll());
}

module.exports = { createUser, getUsers };

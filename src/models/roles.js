/**
 * Roles válidos del sistema FarmaExpres.
 */
const ROLES = {
  ADMINISTRADOR: 'Administrador',
  EMPLEADO: 'Empleado',
};

const VALID_ROLES = Object.values(ROLES);

module.exports = { ROLES, VALID_ROLES };

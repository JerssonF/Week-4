/**
 * Bitácora de auditoría del sistema FarmaExpres.
 * Registra las acciones realizadas sobre usuarios y otros recursos.
 */

const bitacora = [];

/**
 * Registra una entrada en la bitácora.
 * @param {string} accion   - Nombre de la acción ejecutada (e.g. 'CREAR_USUARIO').
 * @param {Object} detalles - Información adicional del evento.
 */
function registrar(accion, detalles = {}) {
  bitacora.push({
    fecha: new Date().toISOString(),
    accion,
    detalles,
  });
}

/**
 * Retorna todas las entradas de la bitácora.
 * @returns {Object[]}
 */
function obtenerRegistros() {
  return [...bitacora];
}

/**
 * Reinicia la bitácora (útil para pruebas).
 */
function reset() {
  bitacora.length = 0;
}

module.exports = { registrar, obtenerRegistros, reset };

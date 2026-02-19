# Week-4

### Historias de Usuario – Proyecto FarmaExpres

Las siguientes historias de usuario están redactadas en formato estándar:

Como [rol], quiero [funcionalidad], para [beneficio].

Cada historia incluye un checklist que puede copiarse directamente en Trello como lista de verificación.

---

### HU-01 – Registro de Usuario

Como Administrador,  
quiero registrar nuevos usuarios con rol definido,  
para controlar el acceso al sistema según responsabilidades.

Checklist:

- Crear formulario con campos obligatorios.
- Validar que no exista usuario duplicado.
- Asignar rol (Administrador, Farmacéutico, Auxiliar, Auditor).
- Cifrar contraseña antes de guardar.
- Registrar creación en bitácora.
- Confirmar almacenamiento correcto en base de datos.

---

### HU-02 – Autenticación de Usuario

Como Usuario,  
quiero iniciar sesión con mis credenciales,  
para acceder al sistema según mi rol.

Checklist:

- Validar usuario y contraseña.
- Bloquear acceso si credenciales inválidas.
- Registrar intento fallido.
- Redirigir según rol.
- Aplicar cierre automático tras 20 minutos.
- Usar conexión segura HTTPS.

---

### HU-03 – Recuperación de Contraseña

Como Usuario,  
quiero recuperar mi contraseña,  
para restablecer acceso en caso de olvido.

Checklist:

- Permitir solicitud de recuperación.
- Validar identidad del usuario.
- Generar mecanismo seguro de restablecimiento.
- Registrar acción en bitácora.

---

### HU-04 – Registro de Medicamento

Como Farmacéutico,  
quiero registrar medicamentos con lote y vencimiento,  
para mantener control sanitario y administrativo.

Checklist:

- Validar campos obligatorios.
- Registrar código único.
- Registrar principio activo.
- Registrar número de lote.
- Registrar fecha de vencimiento.
- Asignar sede.
- Definir stock mínimo.
- Definir estado activo/inactivo.
- Evitar duplicado código + lote.
- Guardar en base de datos.
- Registrar acción en historial.

---

### HU-05 – Actualización de Medicamento

Como Farmacéutico,  
quiero actualizar información de productos,  
para mantener datos correctos.

Checklist:

- Permitir edición de datos autorizados.
- Validar formatos y campos obligatorios.
- Registrar cambio en bitácora.
- Evitar modificar historial previo.

---

### HU-06 – Eliminación Lógica de Producto

Como Administrador,  
quiero desactivar productos sin borrarlos físicamente,  
para mantener integridad histórica.

Checklist:

- Cambiar estado a inactivo.
- Impedir eliminación física.
- Registrar acción en bitácora.
- Evitar venta de producto inactivo.

---

### HU-07 – Registro de Venta

Como Auxiliar,  
quiero registrar ventas de medicamentos,  
para actualizar automáticamente el inventario.

Checklist:

- Validar stock disponible.
- Verificar que no esté vencido.
- Descontar stock automáticamente.
- Impedir stock negativo.
- Registrar movimiento en historial.
- Reflejar cambios en tiempo real.

---

### HU-08 – Registro de Entrada (Compra)

Como Farmacéutico,  
quiero registrar entradas de inventario,  
para actualizar el stock disponible.

Checklist:

- Registrar cantidad ingresada.
- Asociar lote y vencimiento.
- Actualizar stock automáticamente.
- Registrar movimiento con usuario y fecha.
- Confirmar atomicidad (todo o nada).

---

### HU-09 – Alertas de Vencimiento

Como Administrador,  
quiero recibir alertas configurables de vencimiento,  
para evitar pérdidas por caducidad.

Checklist:

- Configurar alertas a 30 días.
- Configurar alertas a 15 días.
- Bloquear productos vencidos automáticamente.
- Mostrar lista de productos próximos a vencer.
- Impedir venta de productos vencidos.

---

### HU-10 – Historial de Movimientos

Como Auditor,  
quiero consultar el historial de movimientos,  
para garantizar trazabilidad y control.

Checklist:

- Mostrar usuario.
- Mostrar fecha y hora.
- Mostrar tipo de movimiento.
- Mostrar sede.
- Mostrar cantidad afectada.
- Permitir filtrado por producto y fecha.
- Proteger contra modificaciones.

---

### HU-11 – Reporte de Inventario

Como Administrador,  
quiero generar reportes de inventario actual,  
para tomar decisiones estratégicas.

Checklist:

- Generar reporte de inventario actual.
- Generar reporte de productos agotados.
- Generar reporte de próximos a vencer.
- Generar historial de movimientos.
- Tiempo de generación ≤ 30 segundos.

---

### HU-12 – Concurrencia Controlada

Como Usuario,  
quiero que el sistema maneje operaciones simultáneas sin errores,  
para evitar inconsistencias.

Checklist:

- Implementar control transaccional.
- Evitar actualizaciones simultáneas inconsistentes.
- Notificar conflicto de edición.
- Aplicar rollback ante error.
- Reflejar cambios en máximo 15 segundos.

---

### HU-13 – Control de Sesiones Concurrentes

Como Administrador,  
quiero limitar sesiones activas por sede,  
para controlar el uso del sistema.

Checklist:

- Definir número máximo de sesiones.
- Bloquear acceso cuando se alcance el límite.
- Mostrar mensaje informativo.
- Registrar intento en bitácora.

---

### HU-14 – Respaldo y Recuperación

Como Administrador,  
quiero que el sistema realice respaldos automáticos,  
para proteger la información ante fallos.

Checklist:

- Programar backup diario.
- Verificar integridad del respaldo.
- Permitir restauración en máximo 1 día.
- Registrar operación en bitácora.

---

### HU-15 – Seguridad y Protección de Datos

Como Administrador,  
quiero que los datos sensibles estén protegidos,  
para garantizar confidencialidad.

Checklist:

- Almacenar contraseñas cifradas.
- Validar uso de HTTPS.
- Controlar permisos por rol.
- Restringir acceso a bitácora.
- Validar campos antes de guardar información.

---

Estas historias están alineadas con:

- Necesidades del negocio.
- Requerimientos funcionales RF-01 a RF-17.
- Requerimientos no funcionales RNF-01 a RNF-32.
- Correcciones estratégicas indicadas.



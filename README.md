# Week-4

### Historias de Usuario – Requerimientos Funcionales (RF)  
Proyecto: FarmaExpres  

---

### HU-RF-01 – Registro de Usuarios

Como Administrador,  
quiero registrar usuarios con roles definidos,  
para controlar el acceso al sistema según responsabilidades.

Justificación:  
Permite aplicar control de acceso basado en roles y proteger funciones críticas.

Checklist:

- Crear usuario con datos obligatorios.
- Asignar rol (Administrador, Farmacéutico, Auxiliar, Auditor).
- Validar que no exista duplicado.
- Cifrar contraseña.
- Registrar creación en bitácora.

---

### HU-RF-02 – Autenticación

Como Usuario,  
quiero iniciar sesión con mis credenciales,  
para acceder al sistema de manera segura.

Justificación:  
Garantiza seguridad y trazabilidad de operaciones.

Checklist:

- Validar credenciales.
- Bloquear acceso inválido.
- Registrar intentos fallidos.
- Redirigir según rol.
- Aplicar cierre automático por inactividad.

---

### HU-RF-03 – Recuperación de Contraseña

Como Usuario,  
quiero recuperar mi contraseña,  
para restablecer acceso cuando la olvide.

Justificación:  
Evita interrupciones operativas sin comprometer la seguridad.

Checklist:

- Solicitar recuperación.
- Validar identidad.
- Generar mecanismo seguro de restablecimiento.
- Registrar acción en bitácora.

---

### HU-RF-05 – Bitácora de Acciones

Como Administrador o Auditor,  
quiero consultar una bitácora de acciones críticas,  
para garantizar trazabilidad y control.

Justificación:  
Permite auditoría completa del sistema y análisis de inconsistencias.

Checklist:

- Registrar inicio y cierre de sesión.
- Registrar ventas.
- Registrar ajustes de inventario.
- Registrar transferencias.
- Registrar eliminaciones lógicas.
- Registrar cambios de rol.
- Permitir consulta filtrada.

---

### HU-RF-06 – Registro de Medicamentos

Como Farmacéutico,  
quiero registrar medicamentos con información completa,  
para controlar inventario por lote y vencimiento.

Justificación:  
Es la base del control sanitario y administrativo del sistema.

Checklist:

- Registrar código único.
- Registrar nombre comercial.
- Registrar principio activo.
- Registrar número de lote.
- Registrar fecha de vencimiento.
- Registrar cantidad disponible.
- Registrar ubicación.
- Registrar precio unitario.
- Registrar sede.
- Registrar stock mínimo.
- Definir estado (activo/inactivo).
- Evitar duplicado código + lote.

---

### HU-RF-07 – Actualización de Producto

Como Farmacéutico,  
quiero actualizar información de medicamentos,  
para mantener datos correctos y actualizados.

Justificación:  
Permite mantener integridad y exactitud de la información.

Checklist:

- Permitir edición de campos autorizados.
- Validar datos antes de guardar.
- Registrar modificación en bitácora.
- No alterar historial previo.

---

### HU-RF-08 – Eliminación Lógica

Como Administrador,  
quiero desactivar productos sin eliminarlos físicamente,  
para preservar trazabilidad histórica.

Justificación:  
Evita pérdida de información y mantiene coherencia en reportes.

Checklist:

- Cambiar estado a inactivo.
- Impedir eliminación física.
- Registrar acción en bitácora.
- Bloquear venta de producto inactivo.

---

### HU-RF-09 – Registro de Venta

Como Auxiliar,  
quiero registrar ventas de medicamentos,  
para descontar automáticamente el stock.

Justificación:  
Automatiza procesos y reduce errores humanos.

Checklist:

- Validar stock disponible.
- Verificar que el producto no esté vencido.
- Descontar stock automáticamente.
- Evitar stock negativo.
- Registrar movimiento en historial.
- Reflejar cambio en tiempo real.

---

### HU-RF-10 – Alertas de Vencimiento y Stock

Como Administrador,  
quiero recibir alertas automáticas,  
para evitar pérdidas por vencimiento o desabastecimiento.

Justificación:  
Es una necesidad crítica del negocio farmacéutico.

Checklist:

- Generar alerta por stock mínimo.
- Generar alerta 30 días antes del vencimiento.
- Generar alerta 15 días antes del vencimiento.
- Bloquear productos vencidos automáticamente.
- Mostrar lista de productos críticos.

---

### HU-RF-11 – Consulta de Inventario en Tiempo Real

Como Usuario,  
quiero consultar inventario actualizado,  
para tomar decisiones correctas.

Justificación:  
Evita desfases de información y descuadres de stock.

Checklist:

- Mostrar inventario por sede.
- Reflejar cambios inmediatamente.
- Permitir búsqueda por nombre o código.
- Permitir filtrado por estado o vencimiento.

---

### HU-RF-12 – Registro de Entrada (Compra)

Como Farmacéutico,  
quiero registrar entradas de inventario,  
para aumentar el stock disponible.

Justificación:  
Permite control completo de abastecimiento.

Checklist:

- Registrar cantidad ingresada.
- Asociar lote y vencimiento.
- Actualizar stock automáticamente.
- Registrar movimiento con usuario y fecha.

---

### HU-RF-13 – Registro de Salida (Ajustes/Vencimientos)

Como Farmacéutico,  
quiero registrar salidas de inventario,  
para mantener coherencia en el stock.

Justificación:  
Permite registrar pérdidas, ajustes o vencimientos.

Checklist:

- Registrar motivo de salida.
- Validar cantidad disponible.
- Descontar stock.
- Registrar movimiento en historial.

---

### HU-RF-14 – Historial de Movimientos

Como Auditor,  
quiero consultar historial detallado de movimientos,  
para garantizar trazabilidad y análisis de rotación.

Justificación:  
Sin historial no existe auditoría ni control administrativo.

Checklist:

- Mostrar usuario.
- Mostrar fecha y hora.
- Mostrar tipo de movimiento.
- Mostrar sede.
- Mostrar cantidad afectada.
- Permitir filtro por producto.
- Permitir filtro por rango de fechas.
- Impedir modificación del historial.

---

### HU-RF-15 – Generación de Reportes

Como Administrador,  
quiero generar reportes de inventario y movimientos,  
para apoyar la toma de decisiones.

Justificación:  
Permite análisis de desempeño y planificación.

Checklist:

- Generar reporte de inventario actual.
- Generar reporte de productos agotados.
- Generar reporte de próximos a vencer.
- Generar reporte de historial de movimientos.
- Permitir exportación básica.

---

### HU-RF-16 – Acceso Concurrente

Como Usuario,  
quiero que el sistema permita múltiples usuarios simultáneamente,  
para trabajar sin bloqueos.

Justificación:  
El sistema es multiusuario y centralizado.

Checklist:

- Permitir sesiones simultáneas.
- Evitar inconsistencias en actualizaciones.
- Manejar conflictos de edición.
- Aplicar control transaccional.

---

### HU-RF-17 – Actualización en Tiempo Real

Como Usuario,  
quiero que los cambios se reflejen inmediatamente,  
para evitar desfases de información.

Justificación:  
Garantiza coherencia y sincronización del inventario.

Checklist:

- Reflejar cambios en otros usuarios conectados.
- Actualizar vista sin recarga manual.
- Confirmar consistencia tras cada operación.

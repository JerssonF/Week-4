const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../src/app');
const userStore = require('../src/models/userStore');
const bitacora = require('../src/utils/bitacora');

beforeEach(() => {
  userStore.reset();
  bitacora.reset();
});

describe('POST /api/users – Crear usuario', () => {
  const validUser = {
    nombre: 'Ana García',
    email: 'ana@farmaexpres.com',
    password: 'Segura123!',
    rol: 'Administrador',
  };

  test('crea un usuario con datos válidos y retorna 201', async () => {
    const res = await request(app).post('/api/users').send(validUser);

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      nombre: validUser.nombre,
      email: validUser.email,
      rol: validUser.rol,
    });
    expect(res.body.id).toBeDefined();
    expect(res.body.password).toBeUndefined();
  });

  test('asigna rol Empleado correctamente', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ ...validUser, email: 'empleado@farmaexpres.com', rol: 'Empleado' });

    expect(res.status).toBe(201);
    expect(res.body.rol).toBe('Empleado');
  });

  test('cifra la contraseña antes de almacenarla', async () => {
    await request(app).post('/api/users').send(validUser);

    const stored = userStore.findByEmail(validUser.email);
    expect(stored.password).not.toBe(validUser.password);
    const match = await bcrypt.compare(validUser.password, stored.password);
    expect(match).toBe(true);
  });

  test('rechaza creación con email duplicado (409)', async () => {
    await request(app).post('/api/users').send(validUser);
    const res = await request(app).post('/api/users').send(validUser);

    expect(res.status).toBe(409);
    expect(res.body.error).toMatch(/ya existe/i);
  });

  test('rechaza si falta campo obligatorio (400)', async () => {
    const { password, ...sinPassword } = validUser;
    const res = await request(app).post('/api/users').send(sinPassword);

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/obligatorio/i);
  });

  test('rechaza un rol inválido (400)', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ ...validUser, rol: 'Superusuario' });

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/rol/i);
  });

  test('registra la acción en la bitácora', async () => {
    await request(app).post('/api/users').send(validUser);

    const registros = bitacora.obtenerRegistros();
    expect(registros).toHaveLength(1);
    expect(registros[0].accion).toBe('CREAR_USUARIO');
    expect(registros[0].detalles.email).toBe(validUser.email);
    expect(registros[0].detalles.rol).toBe(validUser.rol);
    expect(registros[0].fecha).toBeDefined();
  });
});

describe('GET /api/users – Listar usuarios', () => {
  test('retorna lista vacía inicialmente', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('retorna usuarios sin contraseña', async () => {
    await request(app).post('/api/users').send({
      nombre: 'Carlos López',
      email: 'carlos@farmaexpres.com',
      password: 'Clave456!',
      rol: 'Empleado',
    });

    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].password).toBeUndefined();
    expect(res.body[0].email).toBe('carlos@farmaexpres.com');
  });
});

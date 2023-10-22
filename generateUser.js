const fs = require('fs');

// Estructura base para los usuarios
const baseUser = {
  firstname: 'Random',
  lastname: '',
  email: '',
  password: 'randompassword',
};

// Dominio del correo institucional
const domain = '@duocuc.cl';

// Array de letras para generar usernames
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Función para generar un nombre de usuario aleatorio
function generateUsername() {
  const username =
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)];
  return username;
}

// Función para generar un email
function generateEmail(username) {
  return username + '.' + baseUser.lastname + domain;
}

// Array para almacenar los usuarios
const users = [];

// Genera 20 usuarios aleatorios
for (let i = 0; i < 20; i++) {
  const newUser = { ...baseUser };
  newUser.lastname = `User${i + 1}`;
  newUser.username = generateUsername();
  newUser.email = generateEmail(newUser.username);
  users.push(newUser);
}

// Convierte los usuarios a formato JSON
const usersJSON = JSON.stringify(users, null, 2);

// Guarda los usuarios en un archivo JSON
fs.writeFileSync('generatedUsers.json', usersJSON, 'utf8');

console.log('Usuarios generados y guardados en generatedUsers.json');
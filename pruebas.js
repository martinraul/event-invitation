
function probarValidarNombreUsuario() {
	console.assert(
		validarNombreUsuario('') === 'Este campo debe tener al menos 1 caracter',
		'Validar NOMBRE no validó que el nombre no sea vacío',
		);
}

function probarValidarApellidoUsuario() {
	console.assert(
		validarApellidoUsuario('') === 'Este campo debe tener al menos 1 caracter',
		'Validar APELLIDO no validó que el nombre no sea vacío',
		);
}
function probarValidarMailUsuario() {
	console.assert(
		validarMailUsuario('') === 'Ingrese mail valido',
		'Validar MAIL no validó que el nombre no sea vacío',
		);
}
function probarValidarEdadUsuario() {
	console.assert(
		validarEdadUsuario('') === 'Este campo debe tener al menos 1 caracter',
		'Validar EDAD no validó que el nombre no sea vacío',
		);
}

probarValidarNombreUsuario()
probarValidarApellidoUsuario()
probarValidarMailUsuario()
probarValidarEdadUsuario()

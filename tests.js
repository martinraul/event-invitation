
function testValidateName() {
	console.assert(
		testValidateName('') === 'This field is required',
		'Validate NAME test failed',
	);
}
function testValidateSurname() {
	console.assert(
		testValidateSurname('') === 'This field is required',
		'Validate SURNAME test failed',
	);
}
function testValidateMail() {
	console.assert(
		testValidateMail('') === 'mail required',
		'Validate MAIL test failed',
	);
}
function testValidateAge() {
	console.assert(
		testValidateAge('') === 'This field is required',
		'Validate AGE test failed',
	);
}
testValidateName();
testValidateSurname();
testValidateMail();
testValidateAge();
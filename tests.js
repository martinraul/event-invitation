
function testValidateName() {
	console.assert(
		validateName('') === 'This field is required',
		'Validate NAME test failed',
	);
}
function testValidateSurname() {
	console.assert(
		validateSurname('') === 'This field is required',
		'Validate SURNAME test failed',
	);
}
function testValidateMail() {
	console.assert(
		validateMail('') === 'Mail required',
		'Validate MAIL test failed',
	);
}
function testValidateAge() {
	console.assert(
		validateAge('') === 'This field is required',
		'Validate AGE test failed',
	);
}
testValidateName();
testValidateSurname();
testValidateMail();
testValidateAge();
function Email() {
	var email =  document.send.email.value;
	var fullName =  document.send.fullName.value;
	var message =  document.send.message.value;


	if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
alert("Inserire un indirizzo email valido.");
document.modulo.email.focus();
}
else if ((fullName == "") || (fullName == "undefined")) {
alert("Inserire un oggetto.");
document.modulo.fullName.focus();
}
else if ((message == "") || (message == "undefined")) {
alert("Inserire un messaggio.");
document.modulo.message.focus();
}
else {
location.href = "mailto:" + email + "?Subject=" + fullName + "&Body=" + message;
}
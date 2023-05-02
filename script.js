	

	//Send Email from form contact
	var btn = document.getElementById('btn');

	btn.addEventListener('click', function(e) {
		
	e.preventDefault()
    var fullName =  document.getElementById('name');
	var email =  document.getElementById('email');
	var message =  document.getElementById('message');
	var typeWork =  document.getElementById('typeWork');
	var body =  "Full name: " + fullName.value + "<br> Email: " + email.value + "<br> Type Work: "
	            + typeWork.value + "<br> Message: " + message.value;
	            

    Email.send({
    SecureToken : "7d3a7a88-2a06-4732-9627-ca6cc311e2da",
    To : 'sisayasenova@gmail.com',
    From : 'sisayasenova@gmail.com',
    Subject : "Contact for work project",
    Body : body
	});

	document.getElementById('form').reset();

    });
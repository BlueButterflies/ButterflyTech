	//Get variables from body tags for traductions 
	let langs = document.querySelector(".langs");

	//navbar section
	let links =  document.querySelectorAll("a");
	let home =  document.querySelector(".home");
	let about =  document.querySelector(".about");
	let skills =  document.querySelector(".skills");
	let projects =  document.querySelector(".projects");
	let contacts =  document.querySelector(".contacts");

	//intro section
	let introTextOne = document.querySelector(".introTextOne");
	let introTextTwo = document.querySelector(".introTextTwo");
	let contactMe = document.querySelector(".contactMe");

	//About section
	let aboutMe = document.querySelector(".aboutMe");
	let aboutDescription =  document.querySelector(".aboutDescription");

	//Skills section
	let skill = document.querySelector(".skill");

	//project section
	//Games
	let gameTxt =  document.querySelector(".gameTxt");
	let mathGame =  document.querySelector(".mathGame");
	let italyGame =  document.querySelector(".italyGame");
	//Website
	let website =  document.querySelector(".website");
	let demo =  document.querySelector(".demo");
	let demoTwo =  document.querySelector(".demoTwo");
	let demoThree =  document.querySelector(".demoThree");
	//Programs
	let projectTxt= document.querySelector(".projectTxt");
	let programs = document.querySelector(".programs");
	let phonebook =  document.querySelector(".phonebook");
	let calculator =  document.querySelector(".calculator");
	let note =  document.querySelector(".note");

	//Contactme section
	let contactTxt = document.querySelector(".contactTxt");
	let nameTxt = document.querySelector(".nameTxt");
	let emailTxt =  document.querySelector(".emailTxt");
	let chooceTxt = document.querySelector(".chooceTxt");
	let optionOne =  document.querySelector(".optionOne");
	let optionTwo =  document.querySelector(".optionTwo");
	let optionTree =  document.querySelector(".optionTree");
	let continentTxt = document.querySelector(".continentTxt");
	let continentOne = document.querySelector(".continentOne");
	let continentTwo = document.querySelector(".continentTwo");
	let continentTree = document.querySelector(".continentTree");
	let continentFour = document.querySelector(".continentFour");
	let continentFive = document.querySelector(".continentFive");
	let continentSix = document.querySelector(".continentSix");
	let continentSeven = document.querySelector(".continentSeven");
	let messageTxt = document.querySelector(".messageTxt");
	let submit =  document.querySelector(".submit");
	let reset =  document.querySelector(".reset");
	let callTxt = document.querySelector(".callTxt");
	let writeTxt = document.querySelector(".writeTxt");
	let visitTxt = document.querySelector(".visitTxt");

	//Footer section
	let biuldTxt =  document.querySelector(".biuldTxt");




	links.forEach(el => {
		
		el.addEventListener("click", ()=>{

          let attr = el.getAttribute("lang")

          //navbar section
          home.textContent = data[attr].home
          about.textContent = data[attr].about
          //skills.textContent = data[attr].skills
          projects.textContent = data[attr].projects
          contacts.textContent = data[attr].contacts

          //intro section
          introTextOne.textContent = data[attr].introTextOne
          introTextTwo.textContent = data[attr].introTextTwo
          contactMe.textContent = data[attr].contactMe

          //About me section
          aboutMe.textContent = data[attr].aboutMe
          aboutDescription.textContent =  data[attr].aboutDescription

          //Skills section
          //skill.textContent =  data[attr].skill

          //Projects section
          projectTxt.textContent = data[attr].projectTxt
          gameTxt.textContent = data[attr].gameTxt
          mathGame.textContent = data[attr].mathGame
          italyGame.textContent = data[attr].italyGame
          website.textContent = data[attr].website
          demo.textContent = data[attr].demo
          demoTwo.textContent = data[attr].demoTwo
          demoThree.textContent = data[attr].demoThree
          programs.textContent = data[attr].programs
          phonebook.textContent = data[attr].phonebook
          calculator.textContent = data[attr].calculator
          note.textContent = data[attr].note

          //Contact me section
          contactTxt.textContent =  data[attr].contactTxt
          nameTxt.textContent =  data[attr].nameTxt
          emailTxt.textContent =  data[attr].emailTxt
          chooceTxt.textContent =  data[attr].chooceTxt
          optionOne.textContent = data[attr].optionOne
          optionTwo.textContent = data[attr].optionTwo
          optionTree.textContent = data[attr].optionTree
          continentTxt.textContent = data[attr].continentTxt
          continentOne.textContent = data[attr].continentOne
          continentTwo.textContent = data[attr].continentTwo
          continentTree.textContent = data[attr].continentTree
          continentFour.textContent = data[attr].continentFour
          continentFive.textContent = data[attr].continentFive
          continentSix.textContent = data[attr].continentSix
          continentSeven.textContent = data[attr].continentSeven
          messageTxt.textContent =  data[attr].messageTxt
          submit.textContent = data[attr].submit
          reset.textContent = data[attr].reset
          callTxt.textContent = data[attr].callTxt
          writeTxt.textContent = data[attr].writeTxt
          visitTxt.textContent = data[attr].visitTxt

          //Footer section
          biuldTxt.textContent = data[attr].biuldTxt


     })

	});

    //Language for translation
    var data = {
    	"EN": {
				//navbar tags section
				"home": "Home",
				"about": "About",
				"skills":"Skills",
				"projects": "Projects",
				"contacts": "Contacts",
				"langChoice": "En",

				//intro tags section
				"introTextOne": "You are looking for a professional who can help you realize your ideas?",
				"introTextTwo": "Then you are at the right place.",
				"contactMe": "Contact me",


				//About tags section
				"aboutMe": "About me",
				"aboutDescription": "Nice to meet you I'm Siyana. I'm Full Stack Developer and Web Designer. " 
				+ "Helping you turn your idea into reality with my knowledge and expertise is my main goal. "
				+ "My top priority is your satisfaction, so I remain in proper communication with you to meet every expectation. "
				+ "I am confident that with my skills, experience and dedication to customer satisfaction, "
				+ "I can deliver outstanding results for any web development project.",

                //Skills tags section
                "skill": "Skills",

				//Projects tags section
				"projectTxt": "Projects",
				"gameTxt": "GAME",
				"mathGame": "Mathematic Game",
				"italyGame": "Italy Grammar Game",
				"website": "Website",
				"demo": "Demo website",
				"demoTwo": "Demo website",
				"demoThree": "Demo website",
				"programs": "Programs",
				"phonebook": "Phonebook",
				"calculator": "Calculator",
				"note": "Note",

				//Contactme tags section
				"contactTxt" : "Contacts",
				"nameTxt": "Full name",
				"emailTxt": "Email",
				"chooceTxt": "Chooce type of work",
				"optionOne": "Web development",
				"optionTwo": "Web Design",
				"optionTree": "Software development",
				"continentTxt": "Continent",
				"continentOne": "Asia",
				"continentTwo": "Africa",
				"continentTree": "Europe",
				"continentFour": "North America",
				"continentFive": "South America",
				"continentSix": "Australia/Oceania",
				"continentSeven": "Antarctica",
				"messageTxt": "Write your request",
				"submit": "Send",
				"reset": "Reset",
				"callTxt": "Call me",
				"writeTxt": "Write me",
				"visitTxt": "Visit me",

				//footer tags section
				"biuldTxt": "©2023 Biuld with ♥ from Butterfly Tech Creative Solution"
			},

		"IT": {
				//navbar tags section
				"home": "Inizio",
				"about": "Chi sono",
				"skills":"Skills",
				"projects": "Progetti",
				"contacts": "Contatti",
				"langChoice": "It",

				//intro tags section
				"introTextOne": "Cerchi un professionista che possa aiutarti a realizzare le tue idee?",
				"introTextTwo": "Allora sei nel posto giusto.",
				"contactMe": "Contattami",


				//About tags section
				"aboutMe": "Chi sono",
				"aboutDescription": "Piacere di conoscerti, sono Siyana. Sono una sviluppatrice Full Stack Developer e Web Designer. "
				+ "Aiutarti a trasformare la tua idea in realtà con la mia conoscenza e competenza è il mio obiettivo principale. "
				+ "La mia massima priorità è la tua soddisfazione, quindi rimango in corretta comunicazione con te per soddisfare ogni aspettativa. "
				+ "Sono fiduciosa che con le mie capacità, esperienza e dedizione alla soddisfazione del cliente, "
				+ "posso fornire risultati eccezionali per qualsiasi progetto di sviluppo web.",

                //Skills tags section
                "skill": "Skills",

				//Projects tags section
				"projectTxt": "Progetti",
				"gameTxt": "Giochi",
				"mathGame": "Gioco di matematica",
				"italyGame": "Gioco di grammatica",
				"website": "Siti web",
				"demo": "Sito dimostrativo",
				"demoTwo": "Sito dimostrativo",
				"demoThree": "Sito dimostrativo",
				"programs": "Programmi",
				"phonebook": "Rubrica telefonica",
				"calculator": "Calculatrice",
				"note": "Note",

				//Contactme tags section
				"contactTxt": "Contatti",
				"nameTxt": "Nome e Cognome",
				"emailTxt": "Email",
				"chooceTxt": "Scegli tipo di lavoro",
				"optionOne": "Sviluppo web",
				"optionTwo": "Web Design",
				"optionTree": "Sviluppo software",
				"continentTxt": "Continente",
				"continentOne": "Asia",
				"continentTwo": "Africa",
				"continentTree": "Europa",
				"continentFour": "Nord America",
				"continentFive": "Sud America",
				"continentSix": "Australia/Oceania",
				"continentSeven": "Antartide",
				"messageTxt": "Scrivi la tua richiesta",
				"submit": "Invia",
				"reset": "Annulla",
				"callTxt": "Chiamami",
				"writeTxt": "Scrivimi",
				"visitTxt": "Visitami",

				//footer tags section
				"biuldTxt": "©2023 Creato con ♥ da Butterfly Tech Creative Solution"
			},

		"DE": {
				//navbar tags section
				"home": "Start",
				"about": "Wer bin Ich",
				"skills":"Tech-Stack",
				"projects": "Projekte",
				"contacts": "Kontakte",
				"langChoice": "De",

				//intro tags section
				"introTextOne": "Sie suchen einen Profi, der Sie bei der Umsetzung Ihrer Ideen unterstützt?",
				"introTextTwo": "Dann sind Sie hier genau richtig.",
				"contactMe": "Kontaktiere mich",

				//About tags section
				"aboutMe": "Wer bin Ich",
				"aboutDescription": "Schön dich kennenzulernen, ich bin Siyana. Ich bin Full-Stack-Entwickler und Webdesigner. "
				+ "Mein Hauptziel ist es, Ihnen dabei zu helfen, Ihre Idee mit meinem Wissen und meiner Erfahrung in die Realität umzusetzen. "
				+ "Meine oberste Priorität ist Ihre Zufriedenheit, daher bleibe ich in angemessener Kommunikation mit Ihnen, um alle Erwartungen zu erfüllen. "
				+ "Ich bin zuversichtlich, dass ich mit meinen Fähigkeiten, meiner Erfahrung und meinem Engagement für die Kundenzufriedenheit "
				+ "Ich kann hervorragende Ergebnisse für jedes Webentwicklungsprojekt liefern.",

                //Skills tags section
                "skill": "Tech-Stack",

				//Projects tags section
				"projectTxt": "Projekte",
				"gameTxt": "Spiele",
				"mathGame": "Mathematisches Spiel",
				"italyGame": "Italienisches Grammatikspiel",
				"website": "Webseite",
				"demo": "Demo-Website",
				"demoTwo": "Demo-Website",
				"demoThree": "Demo-Website",
				"programs": "Programme",
				"phonebook": "Telefonbuch",
				"calculator": "Taschenrechner",
				"note": "Note",

				//Contactme tags section
				"contactTxt": "Kontakte",
				"nameTxt": "Name und Nachname",
				"emailTxt": "Email",
				"chooceTxt": "Scegli tipo di lavoro",
				"optionOne": "Web Entwicklung",
				"optionTwo": "Web-Design",
				"optionTree": "Software-Entwicklung",
				"continentTxt": "Kontinent",
				"continentOne": "Asien",
				"continentTwo": "Afrika",
				"continentTree": "Europa",
				"continentFour": "Nordamerika",
				"continentFive": "Südamerika",
				"continentSix": "Australien/Ozeanien",
				"continentSeven": "Antarktis",
				"messageTxt": "Schreiben Sie Ihre Anfrage",
				"submit": "Schicken",
				"reset": "Zurücksetzen",
				"callTxt": "Rufen Sie mich an",
				"writeTxt": "Schreib mir",
				"visitTxt": "Besuch mich",

				//footer tags section
				"biuldTxt": "©2023 Erstellen Sie mit ♥ von Butterfly Tech Creative Solution"
			},
    };

    //Get variables from form
	var fullName =  document.getElementById('name');
	var email =  document.getElementById('email');
	var message =  document.getElementById('message');
	var typeWork =  document.getElementById('typeWork');
	var continent =  document.getElementById('continent');

	//Send Email from form contact
	var btn = document.getElementById('btn');

	btn.addEventListener('click', function(e) {
		
	e.preventDefault()
   
	var body =  "Full name: " + fullName.value + "<br> Email: " + email.value  + "<br> Type work: " + typeWork.value 
	             + "<br> Continent: " + continent.value +"<br> Message: " + message.value;
	            

    Email.send({
    SecureToken : "7d3a7a88-2a06-4732-9627-ca6cc311e2da",
    To : 'my email',
    From : 'email.value',
    Subject : "Contact for work project",
    Body : body
	});

    });

    //Reset Form after send email
    function ResetForm() {
    	fullName.value = '';
    	email.value = '';
    	message.value = '';
    	typeWork.value = optionOne.value;
    	continent.value = continentOne.value;
    }

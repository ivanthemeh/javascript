var listContacts = function (contacts) {
	var t = contacts.length
		, i = 0
	;

	document.write('<h1>Contacts</h1>');

	for (i=0; i<t; i++) {
		document.write('<h2>' + contacts[i].name + '</h2>');
		document.write('<dl>');
		document.write('<dt>E-mail address</dt>');
		document.write('<dd><a href="mailto:' + contacts[i].email + '">' + contacts[i].email + '</a></dd>');
		document.write('<dt>Phone number</dt>');
		document.write('<dd><a href="tel:' + contacts[i].tel + '">' + contacts[i].tel + '</a></dd>');
		document.write('</dl>');
	}
};

var contacts = [
	{
		name: 'Mercury Man'
		, email: 'theman@mercury.com'
		, tel: '+05551234'
	}
	, {
		name: 'Venus ’Venturer'
		, email: 'venus@theadventurer.com'
		, tel: '+15551234'
	}
	, {
		name: 'Jupiter Juggernaut'
		, email: 'thejugger@jupiter.com'
		, tel: '+55551234'
	}
];

listContacts(contacts);

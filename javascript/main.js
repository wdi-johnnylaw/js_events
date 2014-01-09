function addChatMessage(){
	var title, message, cssClass, liElement;
	title = "Title";
	message = "Message";
	cssClass = "donny";
	liElement = document.createElement("li");
	liElement.className = cssClass;
	liElement.innerHTML = "<h2>" + title + "</h2><p>" + message + "</p>";
	document.getElementById("chat-list").appendChild(liElement);
}

function getNewMessage() {
	var input = document.getElementById('new-message');
	return input.value;
}

function messageSender(el) {
	if(el.className === 'donny') {
		return 'dude';
	} else {
		return 'donny';
	}
}

function getNextSender() {
	var messages = document.getElementsByTagName('li');
	var lastMessage = messages[messages.length - 1];
	return messageSender(lastMessage);
}
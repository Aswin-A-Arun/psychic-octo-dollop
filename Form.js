class Form {
	constructor(){
	this.input= = createInput("name");
	this.button = createButton('Play');
	this.greeting = createElement('h2');
	
}

hide(){
	this.greeting.hide();
	this.button.hide();
	this.input.hide();
}

display(){
	var title = createElement('h2');
	title.html("Car Racing Game");
	title.position(130,0);

	//this.input = createInput("name");
	//this.button = createButton('Play');

	this.input.position(130,160);
	this.button.position(250,200);

	this.button.MousePressed(function(){
		this.input.hide();
		this.button.hide();

		player.name = this.input.value();

		playerCount+=1;
		player.index = playerCount
		player.update();
		player.updateCount(playerCount);
		var greeting = createElement('h3');
		this.greeting.html("Hello" + player.name)
		this.greeting.position(130,0);
		});
	}
}
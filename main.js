var game = new phaser.game(800,600,phaser,CANVAS,"gameDiv");


var mainState = {
	preload:function(){

	 },

	 create:function(){

	 },

	 update:function(){

	 }

}

game.state.add("mainState", mainState);

game.state.start("mainState");
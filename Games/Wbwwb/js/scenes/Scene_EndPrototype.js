/*Game.addToManifest({
	end_prototype: "https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Games/Wbwwb/sprites/quote/end_prototype.png",
	gunshot: "https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Games/Wbwwb/sounds/gunshot.mp3"
});

function Scene_EndPrototype(){
	
	var self = this;
	Scene.call(self);

	// Layers, yo.
	var q1 = MakeSprite("blackout");
	var q2 = MakeSprite("end_prototype");

	// BANG
	Game.sounds.gunshot.play();

	// Add 'em in.
	q2.alpha = 0;
	Game.stage.addChild(q1);
	Game.stage.addChild(q2);

	// TWEEN ANIM
	Tween_get(q2)
	.wait(_s(BEAT*3.5))
	.to({alpha:1}, _s(BEAT), Ease.quadInOut);

}*/
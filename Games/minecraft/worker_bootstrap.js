onmessage = function(o) {
	importScripts("https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Games/minecraft/classes_server.js");
	eaglercraftServerOpts = o.data;
	main();
};

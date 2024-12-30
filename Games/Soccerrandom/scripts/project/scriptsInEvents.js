


const scriptsInEvents = {

	async Menuevent_Event9_Act3(runtime, localVars)
	{
		runtime.globalVars.access_token = getWebsite_URL();
	},

	async Introevent_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.access_token = getWebsite_URL();
	},

	async Crazygames_Event1_Act2(runtime, localVars)
	{
		await crazysdk.displayAd('midgame');
	},

	async Crazygames_Event7_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Crazygames_Event8_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


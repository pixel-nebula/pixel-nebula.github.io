"use strict";
var scripts = document.getElementsByTagName("script")
  , scriptUrl = scripts[scripts.length - 1].src
  , root = scriptUrl.split("https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2/master-loader.js")[0]
  , loaders = {
    unity: "https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2/unity.js",
    "unity-beta": "https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2/unity-beta.js",
    "unity-2020": "https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2/unity-2020.js"
};
if (0 <= window.location.href.indexOf("pokiForceLocalLoader") && (loaders.unity = "https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2//unity/dist/unity.js",
loaders["unity-beta"] = "https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2//unity-beta/dist/unity-beta.js",
loaders["unity-2020"] = "https://cdn.rawgit.org/pixel-nebula/pixel-nebula.github.io/master/Games/Littlealchemy2//unity-2020/dist/unity-2020.js",
root = "/loaders"),
!window.config)
    throw Error("window.config not found");
var loader = loaders[window.config.loader];
if (!loader)
    throw Error('Loader "' + window.config.loader + '" not found');
if (!window.config.unityWebglLoaderUrl) {
    var versionSplit = window.config.unityVersion ? window.config.unityVersion.split(".") : []
      , year = versionSplit[0]
      , minor = versionSplit[1];
    switch (year) {
    case "2019":
        window.config.unityWebglLoaderUrl = 1 === minor ? "patch/js/UnityLoader.2019.1.js" : "patch/js/UnityLoader.2019.2.js";
        break;
    default:
        window.config.unityWebglLoaderUrl = "https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Games/Littlealchemy2/patch/js/UnityLoader.js"
    }
}
var sdkScript = document.createElement("script");
sdkScript.src = "https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Games/Littlealchemy2/patch/js/poki-sdk.js",
sdkScript.onload = function() {
    var i = document.createElement("script");
    i.src = root + loader,
    document.body.appendChild(i)
}
,
document.body.appendChild(sdkScript);

document.getElementById("botForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const gameCode = document.getElementById("pin").value.trim();
    const botNamesInput = document.getElementById("botNames").value.trim();
    const botCount = parseInt(document.getElementById("botCount").value);
    const interval = parseInt(document.getElementById("interval").value);
    const output = document.getElementById("output");

    // Clear output
    output.textContent = "";

    if (!gameCode || !botNamesInput || isNaN(botCount) || isNaN(interval)) {
        output.textContent = "❌ Invalid input. Please fill out all fields correctly.";
        output.className = "error";
        return;
    }

    const botNames = botNamesInput.split(",").map(name => name.trim()).filter(name => name);
    if (botNames.length === 0) {
        output.textContent = "❌ No valid bot names provided.";
        output.className = "error";
        return;
    }

    output.textContent = "🚀 Starting Quizzical Botter...\n";
    output.className = "info";

    let botsCreated = 0;
    const createBot = () => {
        if (botsCreated >= botCount) {
            output.textContent += `✅ Successfully opened ${botsCreated} bots!\n`;
            output.className = "success";
            return;
        }

        const botName = botNames[botsCreated % botNames.length];
        const botURL = `https://quizizz.com/join?gc=${gameCode}&name=${encodeURIComponent(botName)}`;
        window.open(botURL, `_blank`);

        output.textContent += `✅ Opened bot: ${botName}\n`;
        botsCreated++;

        setTimeout(createBot, interval);
    };

    createBot();
});

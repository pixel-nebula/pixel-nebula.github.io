document.getElementById("botForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const pin = document.getElementById("pin").value;
    const botNamesInput = document.getElementById("botNames").value;
    const botNames = botNamesInput.split(',').map(name => name.trim());
    const botCount = parseInt(document.getElementById("botCount").value, 10);
    const interval = parseInt(document.getElementById("interval").value, 10);
    
    const output = document.getElementById("output");
    output.textContent = 'Starting bots...\n';
    
    let botsStartedSuccessfully = false;

    // Use the new Lambda URL here
    fetch('https://xgbta2culj.execute-api.us-east-2.amazonaws.com/default/KahootBotter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pin: pin,
            botNames: botNames.join(','),
            botCount: botCount,
            interval: interval
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Kahoot ID does not exist');
        }
        return response.json();
    })
    .then(data => {
        botsStartedSuccessfully = true; // Bots are now starting
        output.className = 'success';
        output.textContent = 'Creating Bots!...\n';
        console.log(data);

        let botCounter = 0;
        const addBotInterval = setInterval(() => {
            if (botCounter < botCount) {
                botCounter++;
                output.className = 'info';
                output.textContent += `Successfully added bot ${botCounter}.\n`;
            } else {
                clearInterval(addBotInterval);
                setTimeout(() => {
                    output.className = 'info';
                    output.textContent += 'Successfully Finished!\n';
                }, 500);
            }
        }, interval);
    })
    .catch(error => {
        output.className = 'error';
        if (error.message === 'Kahoot ID does not exist') {
            output.textContent = 'Error: Kahoot ID does not exist.\n';
        } else {
            output.textContent = 'Error: ' + error.message + '\n';
        }
        console.error('Error:', error);

        if (!botsStartedSuccessfully) {
            output.className = 'info';
            output.textContent += 'Bot addition aborted due to error.\n';
        }
    });
});

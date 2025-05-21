document.getElementById("botForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const pin = document.getElementById("pin").value;
    const botName = document.getElementById("botNames").value;
    const botCount = parseInt(document.getElementById("botCount").value, 10);
    const output = document.getElementById("output");
    output.textContent = 'Starting bots...\n';

    let botsStartedSuccessfully = false;

    axios.post('https://dnpzivj073.execute-api.us-east-2.amazonaws.com/default/KahootBotter', {
        pin: pin,
        nickname: botName,
        amount: botCount
    })
    .then(response => {
        botsStartedSuccessfully = true;
        output.className = 'success';
        output.textContent = 'Creating Bots!...\n';
        console.log(response.data);

        let botCounter = 0;
        const interval = 200; // add this if it's not defined elsewhere
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

        if (error.response && error.response.status === 400) {
            output.textContent = 'Error: Kahoot ID does not exist.\n';
        } else {
            output.textContent = 'Error: ' + (error.message || 'Unknown error') + '\n';
        }

        console.error('Error:', error);

        if (!botsStartedSuccessfully) {
            output.className = 'info';
            output.textContent += 'Bot addition aborted due to error.\n';
        }
    });
});

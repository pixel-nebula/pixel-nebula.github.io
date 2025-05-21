document.getElementById("botForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const pin = encodeURIComponent(document.getElementById("pin").value);
    const botName = encodeURIComponent(document.getElementById("botNames").value);
    const botCount = parseInt(document.getElementById("botCount").value, 10);
    
    document.getElementById("pin").value = "";
    document.getElementById("botNames").value = "";
    document.getElementById("botCount").value = "";

    const output = document.getElementById("output");

    fetch(`https://dnpzivj073.execute-api.us-east-2.amazonaws.com/default/KahootBotter?pin=${pin}&nickname=${botName}&amount=${botCount}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Kahoot ID does not exist');
        }
        return response.json();
    })
    .then(data => {
        output.className = 'success';
        output.textContent += 'Bots are Joining!...\n';
        console.log(data);
        // Rest of your success handling
    })
    .catch(error => {
        output.className = 'error';
        output.textContent = 'Error: ' + error.message + '\n';
        console.error('Error:', error);
    });
});

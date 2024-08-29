document.getElementById('saveBtn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    
    fetch('/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Failed to save message.';
    });
});

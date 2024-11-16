
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    fetch('https://the-trivia-api.com/v2/questions?limit=5') 
        .then(response => response.json()) 
        .then(data => {
           console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error); 
        });
});




const gameGrid = document.getElementById('game-grid');
const gameIframe = document.getElementById('game-iframe');
const gameContainer = document.getElementById('game-container');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Fetch games from the external games.json file
fetch('games.json')
    .then(response => response.json())
    .then(games => {
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');
            gameCard.innerHTML = `
                        <img src="${game.imgSrc}" alt="${game.title}">
                        <div class="game-title">${game.title}</div>
                    `;
            gameCard.addEventListener('click', () => {
                gameIframe.src = game.link;
                gameContainer.style.display = 'flex'; // Show the game container
                window.scrollTo(0, 0); // Scroll to the top when the game loads
            });
            gameGrid.appendChild(gameCard);
        });
    })
    .catch(error => console.error('Error loading games:', error));

// Fullscreen functionality
fullscreenBtn.addEventListener('click', () => {
    if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen();
    } else if (gameIframe.mozRequestFullScreen) { // Firefox
        gameIframe.mozRequestFullScreen();
    } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameIframe.webkitRequestFullscreen();
    } else if (gameIframe.msRequestFullscreen) { // IE/Edge
        gameIframe.msRequestFullscreen();
    }
});
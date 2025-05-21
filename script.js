const gameImages = {
    "Triple Tile: Match Puzzle Game": "Goods Puzzle Match Sort Games.jpg",
    "Zen Match Triple Tile Games": "Goods Puzzle Match Sort Games.jpg",
    "Goods Puzzle Match: Sort Games": "Goods Puzzle Match Sort Games.jpg",
    "Dream Words: Search & Explore": "Goods Puzzle Match Sort Games.jpg",
    "Triple Tile Matching Games": "Goods Puzzle Match Sort Games.jpg",
    "Word Connect: Crossword Puzzle": "Goods Puzzle Match Sort Games.jpg",
    "Merge Master: Tank & Plane War": "Goods Puzzle Match Sort Games.jpg",
    "Words of Wonders: Crosswords": "Goods Puzzle Match Sort Games.jpg"
};

const games = [
    {
        title: "Triple Tile: Match Puzzle Game",
        description: "A fun and challenging triple tile matching puzzle game.",
        links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.puzzle.mahjong.block.tilemaster" }
        ]
    },
    // {
    //     title: "Zen Match Triple Tile Games",
    //     description: "Relax and match tiles in this zen puzzle experience.",
    //     links: [
    //         { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dreamspike.puzzle.tile.triple.match.game" }
    //     ]
    // },
    {
        title: "Goods Puzzle Match: Sort Games",
        description: "Sort and match goods in this addictive puzzle game.",
        links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.goodssort.master.triplematch.puzzle3d" }
        ]
    },
    {
        title: "Dream Words: Search & Explore",
        description: "Find words and explore new worlds in this word puzzle adventure.",
        links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.puzzle.wordscapes.wordsearch" }
        ]
    },
    // {
    //     title: "Triple Tile Matching Games",
    //     description: "Match triple tiles and challenge your brain!",
    //     links: [
    //         { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.tile.master.puzzle.block.match3" }
    //     ]
    // },
    // {
    //     title: "Word Connect: Crossword Puzzle",
    //     description: "Connect letters and solve crossword puzzles.",
    //     links: [
    //         { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dreamspike.word.puzzle.crossword.game" }
    //     ]
    // },
    {
        title: "Merge Master: Tank & Plane War",
        description: "Merge tanks and planes to win the war!",
        links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.puzzle.merge.games.strategy.battle" }
        ]
    },
    {
        title: "Words of Wonders: Crosswords",
        description: "Test your vocabulary in this crossword challenge.",
        links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.wonder.words.crossword" }
        ]
    }
];

function loadGames() {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        const imageUrl = gameImages[game.title] || '';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <div class="game-links">
                ${game.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`).join('')}
            </div>
        `;
        gamesList.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', loadGames);

import React from 'react';

const GameListContext = React.createContext({
    games: [],
    addGame: () => {},
    addCategory: () => {},
    setSplits: () => {},
    getGames: () => {},
    getCategoriesForGame: () => {}
});

export default GameListContext;
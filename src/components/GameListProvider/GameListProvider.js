import React from 'react';
import GameListContext from '../../lib/GameListContext';

export default class GameListProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: {},
            addGame: this.addGame,
            addCategory: this.addCategory,
            setSplits: this.setSplits,
            getGames: this.getGames,
            getCategoriesForGame: this.getCategoriesForGame
        };
    }

    render() {
        return <GameListContext.Provider value={this.state}>
            {this.props.children}
        </GameListContext.Provider>
    }

    addGame(gameId, gameTitle) {
        if (this.state.games[gameId] != null) {
            return;
        }

        this.setState({
            games: {
                ...this.state.games,
                [gameId]: {
                    title: gameTitle,
                    categories: {}
                }
            }
        });
    }

    addCategory(gameId, categoryId, categoryTitle) {
        const newGame = this.state.games[gameId];
        if (newGame != null || newGame.categories[categoryId] != null) {
            return;
        }

        newGame.categories[categoryId] = {
            title: categoryTitle,
            splits: {}
        };

        this.setState({
            games: {
                ...this.state.games,
                gameId: newGame
            }
        });
    }

    setSplits(gameId, categoryId, splits) {
        const game = this.state.games[gameId];
        if (game == null) {
            return;
        }

        const category = game.categories[categoryId];
        if (category == null) {
            return;
        }

        this.setState({
            games: {
                ...this.state.games,
                [gameId]: {
                    ...game,
                    categories: {
                        ...game.categories,
                        [categoryId]: {
                            ...category,
                            splits
                        }
                    }
                }
            }
        });
    }

    getGames() {
        return this.state.games;
    }

    getCategoriesForGame(gameId) {
        return this.state.games[gameId].categories;
    }
}
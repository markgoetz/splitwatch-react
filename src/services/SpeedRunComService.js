export default class SpeedRunComService {
    static ROOT_URL = 'https://www.speedrun.com/api/v1';
    static HEADERS = {
        'User-Agent': 'splitwatch-1.0'
    };

    async getGamesByPartialName(partialName) {
        const gameList = await fetch(
            `${this.ROOT_URL}/games?name=${partialName}`,
            { headers: this.HEADERS }
        );

        return gameList.data;
    }

    async getCategoriesByGame(gameId) {
        const categoryList = await fetch(
            `${this.ROOT_URL}/games/${gameId}/categories`,
            { headers: this.HEADERS }
        );

        return categoryList.data;
    }
}
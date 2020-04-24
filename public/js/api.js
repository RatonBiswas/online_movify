class OMDB {

    constructor() {

        this.key = '73101a26';

    }

    async getMovies() {
        const movieResponse = await fetch(`https://www.omdbapi.com/?apikey=${this.key}&s=game
        `);
        const seriesResponse = await fetch(`https://www.omdbapi.com/?apikey=${this.key}&s=series
    `);

        const movieResults = await movieResponse.json();

        const seriesResults = await seriesResponse.json();
        return {
            movie: movieResults.Search,
            series: seriesResults.Search
        }

    }

    async movieInfo(id) {
        //console.log(id);

        const response = await fetch(`https://www.omdbapi.com/?apikey=${this.key}&i=${id}`);
        const results = await response.json();
        return results;
    }

    async search(userText) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${this.key}&s=${userText}`);
        const results = await response.json();
        return results.Search;

    }
}
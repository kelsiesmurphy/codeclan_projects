const Cinema = function (films) {
    this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
    const filmTitles = this.films.map((film) => {
        return film.title;
    });
    return filmTitles;
}

Cinema.prototype.findFilmByTitle = function(filmTitle) {
    const filmByTitle = this.films.find((film) => {
        return film.title === filmTitle;
    })
    return filmByTitle;
}

Cinema.prototype.filterFilmsByGenre = function(filmGenre) {
    const filmsbyGenre = this.films.filter((film) => {
        return filmGenre === film.genre;
    })
    return filmsbyGenre;
}

Cinema.prototype.checkFilmsFromYear = function(filmYear) {
    const filmsFromYear = this.films.some((film) => {
        return filmYear === film.year;
    })
    return filmsFromYear;
}

Cinema.prototype.checkFilmsOverLength = function(filmLength) {
    const filmsOverLength = this.films.every((film) => {
        return film.length >= filmLength;
    })
    return filmsOverLength;
}

Cinema.prototype.totalRunningTime = function() {
    const totalTime = this.films.reduce((total, film) => {
        return total + film.length;
    }, 0)
    return totalTime;
}




module.exports = Cinema;
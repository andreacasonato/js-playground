const movie = {
    title: 'Pinocchio',
    director: 'Ben Sharpsteen',
    year: '1940',

    getDetails: function () {
        return `${this.title} was directed by ${this.director} in ${this.year}.`;
    }
};

console.log(movie.getDetails());

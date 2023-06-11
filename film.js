class Filmproject {
    constructor(schedule, castmembers, budget) {
        this.schedule = schedule;
        this.castmembers = castmembers;
        this.budget = budget;
    }
}
let movies = [];
function addFilm(film) {
    movies.push(film);
    console.log(movies);
}
function checkBudget(film, totalBudget) {
    if (totalBudget < film.budget) {
        console.log("you are within budget limit");
    } else {
        console.log("You have exceeded the budget limit");
    }
}
const myFilm = new Filmproject(["Monday", "Wednesday", "Friday"], ["John", "Jane", "Bob"], 100000.0);
addFilm(myFilm);
checkBudget(myFilm, 90000.0);
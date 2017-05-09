// BACK-END-LOGIC
// function MovieTheater(movie, ticket,) {
//   this.movie = [];
//   this.ticket = [];
// }
//
// function Movie(movieTitle, ageLimit, time ) {
//   this.movieTitle = title;
//   this.ageLimit = ageLimit;
//   this.times = [];
// }
//
// function Ticket(standard, senior, matinee, movieTime, date) {
//   this.standard = standard;
//   this.senior = senior;
//   this.matinee = matinee;
//   this.movieTime = movieTime;
//   this.date = date;
// }
//





// FRONT-END-LOGIC

$(document).ready(function(event) {
  event.preventDefault();
$("#movie-options").submit(function(event) {
var inputtedMovieName = $('.movie-list').val();
var inputtedTicketPrice = $("input:radio[name=ticket-options]:checked").val();
var inputtedTime = $('.time-list').val();
var inputtedDate = $('.date-list').val();

)};

$("ul#ticket-out").append("<li> + inputtedMovieName + </li> <li> + inputtedTicketPrice + </li> <li> + inputtedTime + </li> <li> + inputtedDate + </li>");

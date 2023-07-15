class Movie {
  constructor(title, studio, rating){
    this.title = title;
    this.studio = studio;
    if(rating === "")
    {
      this.rating = "PG";
    }
    else {
      this.rating = rating;
    }
  }
  
  getPG(arr) {
     
  let pgMovies = arr.filter((value) => value.rating == "PG");
      console.log(pgMovies);
      return;
  }
}

  let film = new Movie("Casino Royale", "Eon Productions", "PG13");

  let movie2 = new Movie("Good Night", "Sun Pictures", "PG13");

  let movie3 = new Movie("Conjuring", "New Line Cinema", "PG");
  
  let movie4 = new Movie("Avengers", "Marvel Studio", "R");
  
  let movie5 = new Movie("Godzilla", "Legendary Pictures", "PG");
              
  let allMovies = [];
  
  allMovies.push(film, movie2, movie3, movie4, movie5);

  let obj = new Movie();
  obj.getPG(allMovies);

export const apikey = "8b202e3aa9ae4600acd6c448e326badd"


export const requests = {
    latest:`https://api.themoviedb.org/3/movie/trending?api_key=${apikey}&language=en-US`,
    toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,
    trending:`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
    horror:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=horror&page=1&include_adult=true`,
    Nightmovies:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=vampire&page=1&include_adult=true`,
   
  
   
  
   }
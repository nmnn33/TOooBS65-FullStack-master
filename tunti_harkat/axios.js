var axios = require("axios");
const promise = axios
    .get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
    .then((response) => {
        const movies = response.data;
        for (var i = 0; i < movies.Search.lenght; i++) {
            console.log(movies.Search[i].Title);
        }
    });
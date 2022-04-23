
var API_KEY = "4fd42901";

document.getElementById("movieInput").addEventListener("change" , function(){
    getData();
})
  
function getData(){
    var movie = document.getElementById("movieInput");
    var myRequest = fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.value}`);
    myRequest.then(function(res){
        res.json().then(function(res){
            console.log(res);
            var movieData = res;
            displayMovie(movieData);
        }).catch(function(err){
            console.log(err);
        })
    }).catch(function(err){
        console.log(err);
    })
}

function displayMovie(data){
    document.getElementById("movieContainer").style.display = "block";
    document.getElementById("errorContainer").style.display = "none";
    if(document.getElementById("movieInput").value == ""){
        window.location.reload();
    }
    document.getElementById("movieContainer").innerText = "";
     var movieCard = document.createElement('div');
        var imgDiv = document.createElement('div');
           var img = document.createElement('img');
             img.src = data.Poster;
        imgDiv.append(img);

        var textDiv = document.createElement('div');
        var title = document.createElement('div');
         title.textContent = data.Title;
         var release = document.createElement('div');
           release.textContent = `Release Date :  ${data.Released}`;
          var rating = document.createElement('div');
            rating.textContent = `Rating : ${data.imdbRating}`;
       textDiv.append(title , release , rating );
    movieCard.append(imgDiv , textDiv);

       document.getElementById("movieContainer").append(movieCard);


       if(data.Response == "False"){

        document.getElementById("movieContainer").style.display = "none";
        document.getElementById("errorContainer").style.display = "block";
       document.getElementById("errorContainer").innerText = "";
    
        let para = document.createElement("p");
        para.textContent = "Please try another movie"
        let img = document.createElement("img");
        img.src = "https://media.istockphoto.com/vectors/gift-box-exploding-with-sparkles-and-confetti-vector-flat-icon-for-vector-id1081206004?k=20&m=1081206004&s=612x612&w=0&h=mtENCx1t8ZaDov6Z6fQWogVPQomhIAdBpHPm2TGMhPY=";
        document.getElementById("errorContainer").append(para , img);

    }

}
var url = "https://itunes.apple.com/search?term=darude";

$().ready(function() {
    $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },
    success: function( response ) {
        console.log( response );
        var tracks = response.results;
        tracks.forEach(track => {
            var name = track.collectionName;
            var url = track.artworkUrl100;
            addRecordCard(url,name);
        });
    }
});
});

function addRecordCard(url, name){
var recordCard ="<div class=\"card\" style=\"width: 12rem;\">" + 
                "<img src=" + url + " class=\"card-img-top\" alt=\"Collection with record "+name+"\">"+
                "<div class=\"card-body\">"+
                "<h5 class=\"card-title\">"+name+"</h5>"+
                "</div>"+
                "</div>";
$("#records").append(recordCard);
};

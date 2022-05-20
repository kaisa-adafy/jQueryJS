var url = "https://itunes.apple.com/search?term=darude";

$().ready(function () {
    $.ajax({
        url: url,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },
        success: function (response) {
            var tracks = response.results;
            var records = [];
            tracks.forEach(track => {
                var name = track.collectionName;
                var url = track.artworkUrl100;
                if (!records.includes(name)) {
                    addRecordCard(url, name);
                    records.push(name);
                }
            });
        }
    });
});

function addRecordCard(url, name) {
    var recordCard = "<div class=\"card m-1\" style=\"width: 240px;\">" +
        "<img src=" + url + " class=\"card-img-top\" alt=\"Collection with record " + name + "\">" +
        "<div class=\"card-body\">" +
        "<h5 class=\"card-title\">" + name + "</h5>" +
        "</div>" +
        "</div>";
    $("#records").append(recordCard);
};

//
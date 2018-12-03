var randomButton;

$(function () {
    randomButton = $("#randompost");
    // $(randomButton).attr("href", "www.google.com");
});

function getRandomPost(postArray) {
    randomIndex = Math.floor(Math.random() * postArray.length);
    $(randomButton).attr("href", "www.google.com");
}
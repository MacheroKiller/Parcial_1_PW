$(document).ready(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var anuncioParam = urlParams.get('name');
    $('#NameData').prepend(anuncioParam);
    anuncioParam = urlParams.get('email');
    $('#EmailData').prepend(anuncioParam);
    anuncioParam = urlParams.get('number');
    $('#NumberData').prepend(anuncioParam);
    anuncioParam = urlParams.get('likes');
    $('#LikeData').prepend(anuncioParam);
    anuncioParam = urlParams.get('percentage');
    $('#PercentageData').prepend(anuncioParam);
    
});
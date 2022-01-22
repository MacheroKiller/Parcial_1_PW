$(document).ready(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var anuncioParam = urlParams.get('nombre');
    $('#h2ficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('email');
    $('#emailficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('telefono');
    $('#numeroficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('gusto');
    $('#gustoficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('porcentaje');
    $('#porcentajeficha').prepend(anuncioParam);
    
});
//Modul som inneholder alle bilder av nettsteder
var FERIESTEDMODULE = (function(){
    
    //JSON-objekt-liste
    var feriestedJSON = {"feriestedListe":[
        {"land": "tyskland", "by": "berlin", "bildeAvBy": "berlin.jpg"},
        {"land": "tyskland", "by": "munchen", "bildeAvBy": "munchen.jpg"},
        {"land": "spania", "by": "barcelona", "bildeAvBy": "barcelona.jpg"},
        {"land": "spania", "by": "madrid", "bildeAvBy": "madrid.jpg"},
        {"land": "england", "by": "liverpool", "bildeAvBy": "liverpool.jpg"},
        {"land": "england", "by": "london", "bildeAvBy": "london.jpg"},
        {"land": "frankrike", "by": "paris", "bildeAvBy": "paris.jpg"}        
    ]};
    
    var getImageSrc = function(imageIndex){
        return feriestedJSON.feriestedListe[imageIndex].bildeAvBy;   
    };
    
    var getNumberOfImages = function(){
        return feriestedJSON.feriestedListe.length;
    }
    
    return {
        getImageSrc: getImageSrc,
        getNumberOfImages: getNumberOfImages
    };    
    
}());//--end WEBPAGEIMAGESMODULE
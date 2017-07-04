//APP Pattern
var FERIESTEDAPP = {
        
    //variabler
    filstiBilder: "images/",
        
    //init-funksjoner
    init: function(){
            
        var FA = FERIESTEDAPP;            
            
        var setElements = function(){

            FERIESTEDAPP.$landContent = $("#landContent");

        }();

            
        var setEvents = function(){

            $("#landBtn")
                .click(function(){
           
                    var landValgt = $("#landInputTxt").val();
                
                    var beskjed = "";
                
                    if(landValgt == "tyskland"){
                        beskjed = $(".tyskland");
                    }else if(landValgt == "spania"){
                        beskjed = $(".spania");
                    }else if(landValgt == "england"){
                        beskjed = $(".england");
                    }else if(landValgt == "frankrike"){
                        beskjed = $(".frankrike");
                    }else{
                        beskjed = $(".alle");
                    }
                
                    $("#landContent")
                        .html(beskjed);
            
                });

            $("#velgAlleBtn")
                .click(function(){
                    var alleLand = $(".alle");

                    $("#landContent")
                    .html(alleLand);

            });
    

            }();
            
            
        }, //--end init
        
    
    };//--end FERIESTEDAPP
    
    $(function(){
        FERIESTEDAPP.init();        
    });   

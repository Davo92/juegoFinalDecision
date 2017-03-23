$(document).ready(function(){

    funcionesIniciales();

    function funcionesIniciales() {

        eleccion();
        animaciones();
    }

    function eleccion(){
        var jugador = 1;
        var ordenador = 1;
        var partida = 0;
        var fotoVik = document.createElement("IMG");
        //Referente a las cartas del jugador J1 //
        $('#romano, #vikingo, #persa').click(function(){
            var eleccion = $(this).attr("id");
            $('#eleccion').html(eleccion);
            //Referente a la eleccion de la CPU, dandole un numero aleatorio, e indicando que se muestre en su eleccion.    
            var maq = Math.floor(Math.random() * 3);
            if(maq == 0){
                maq = "Romano";
                $("#fmaq_eleccion").html("<img src='/imagenes/sword.png' alt='Romano'>");
            } else if(maq == 1){
                maq = "Vikingo";
                $("#fmaq_eleccion").html("<img src='/imagenes/axe.png' alt='Vikingo'>");
                
            } else if(maq == 2){
                maq = "Persa";
                $("#fmaq_eleccion").html("<img src='/imagenes/katana.png' alt='Persa'>");
            }
            $("#maq_eleccion").html(maq);
            

            if(eleccion == 'romano'){
                $("#f-eleccion").html("<img src='/imagenes/sword.png' alt='Romano'>");
                if(maq == 'Vikingo'){
                    res = "Ronda Perdida";
                } else if(maq == "Persa") {
                    res = "Ronda Ganada";
                } else if(maq == "Romano"){
                    res = "Ronda Empatada";
                    
                }
            }

            if(eleccion == 'vikingo'){
                $("#f-eleccion").html("<img src='/imagenes/axe.png' alt='Vikingo'>");
                if(maq == 'Persa')
                {
                    res = "Ronda Perdida";
                } else if(maq == "Romano") {
                    res = "Ronda Ganada";
                } else if(maq == "Vikingo"){
                    res = "Ronda Empatada";
                }
            }

            if(eleccion == 'persa'){
                $("#f-eleccion").html("<img src='/imagenes/katana.png' alt='Persa'>");
                if(maq == 'Romano')
                {
                    res = "Ronda Perdida";
                } else if(maq == "Vikingo") {
                    res = "Ronda Ganada";
                } else if(maq == "Persa"){
                    res = "Ronda Empatada";
                }
            }
            

            if(res == 'Ronda Ganada'){
                $('#res').css("color", "green");
                $('.numero').text(jugador++);
            } else if(res == 'Ronda Perdida'){
                $('#res').css("color", "red");
                $('.numero2').text(ordenador++);
            } else if(res == 'Ronda Empatada'){
                $('#res').css("color", "orange");
            }
            
            $('#res').html(res);
            
            if ( jugador == 6 ){
                alert("Has ganado la partida");    
            } else if( ordenador == 6){
                alert("Has perdido la partida");
            }
            
        });
    }
});


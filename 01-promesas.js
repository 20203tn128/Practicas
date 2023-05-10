console.log("Hola MUndo")
function sumarUno(numero,callback){
    if(numero>=7){
        callback("Número muy grande")
        return;
    }
    setTimeout(function(){
        callback(null,numero + 1);
    },2000)
    
}

sumarUno(5,function(error,nuveoValor){
    if(error){
        console.log(error);
        return;
    }
    console.log(nuveoValor)

    sumarUno(nuveoValor,function(error,nuveoValor2){
        if(error){
            console.log(error)
            return;
        }
        console.log(nuveoValor2)
        sumarUno(nuveoValor2,function(error,nuveoValor3){
            if(error){
                console.log(error)
                return;
            }
            console.log(nuveoValor3)
        })
    })
})

//console.log(sumarUno(5));



function sumarUnoPromesa(numero){
    console.log(numero);
    var promesa = new Promise(function(resolve,reject){
    if(numero>=7){
        reject("Número muy grande")
        return;
    }
    setTimeout(function(){
        resolve(numero + 1);
    },2000)
});
    return promesa;
}

// sumarUnoPromesa(5).then(function(nuevoValor){
//     console.log(nuevoValor);
//     sumarUnoPromesa(nuevoValor).then(function(nuevoValor2){
//         console.log(nuevoValor2);
//         sumarUnoPromesa(nuevoValor2).then(function(nuevoValor3){
//             console.log(nuevoValor3);
//         })
//     })
// })
//console.log(sumarUnoPromesa(5))

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch((err)=>{
        console.log(err);
})
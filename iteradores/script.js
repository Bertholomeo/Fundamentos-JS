var ganados;
function volado(){
    var random = Math.random() * 100;
    if(random >= 50){
        return 1
    }else{
        return 0
    }
}

for(var i = 1; i <= 365; i ++){
    var volado = volado();
    if(volado === 1){
        ganados++
    }
}
console.log(ganados)

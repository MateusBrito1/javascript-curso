
function getHour () {
    let data = new Date();
    return data.toLocaleString('pt-BR',{
        hour12: false
    })
}


const timer = setInterval(() => {
    console.log(getHour())
}, 1000);


setTimeout(function(){
    clearInterval(timer)
}, 3000);

setTimeout(function(){
    console.log('')
}, 5000);
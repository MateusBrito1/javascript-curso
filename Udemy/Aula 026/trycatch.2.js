

function returnHour (data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    } 
    
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}
    
    try {
    // É executada quando não há erros
    const data = new Date('01-01-1970 12:58:12');
    const hora = returnHour(11);
    console.log(hora);
    } catch (e) {
    //É excutada quando há erros
    //console.log(e)
    } finally {
    //Sempre usar.
    console.log('Tenha um bom dia!')
    }


const api = require('./RestApiSender');

listAllFnb();

async function add(fnbName, fnbType) {
    try{
    var resp = await api.addFnbAsync(fnbName, fnbType);    
    console.log(resp);
    }
    catch(error){
        console.log('Ex: '+resp.error);
    }
}

async function listAllFnb(){
    try {
        var resp = await api.listAllFnbAsync();
        console.log(resp.responseContentString);
    } catch (error) {
        console.log('Ex: '+resp.error);
    }
}

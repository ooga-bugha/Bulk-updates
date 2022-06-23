function constructURL(url){
    return "https://"+url+"/api/v2/tickets"
}
function encodeAPIKey(key){
    return Buffer(key).toString('base64');
}
function constructRequest(FD_URL,API_key){
    var options = {
        'method':'GET',
        'hostname':FD_URL,
        'headers':{
            'Authorization':'Basic ' + API_key,
            'Content-Type': 'application/json'
        }
    }
    return options;
}
let deleteTickets = async function(FD_URL,API_Key,ticket_id){
    var unirest = require('unirest');
    await new Promise(resolve => setTimeout(resolve, 500)); //this is to pause between each iteration. Change the timout ms to your requirement
    var Request = unirest.delete(constructURL(FD_URL)+"/"+ticket_id); //enter URL here
    Request.auth({
        user: API_Key, //enter API key here
        pass: 'x',
        sendImmediately: true
      })
      .end(function(response) {
        if(response.statusType === 2){
            console.log(`Success: ${ticket_id}, ${response.status}`);
        }
        else{
            console.log(`Failure`);
        }
      })
    }

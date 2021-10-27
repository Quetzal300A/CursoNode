const list  = [];

function addMessage(message){
    list.push(message);
}

function getMessages(){
    console.log('entra')
    return list;
}

 module.exports = {
     add: addMessage,
     list: getMessages,
    //  get
    //  update
    //  delete
 }
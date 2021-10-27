const store = require('./store');

function addMessage(user , message) {

    const fullMessage = {
        user: user,
        message: message,
        date: new Date()
    }

    console.log(fullMessage);

    return new Promise( (resolve ,  reject) => {
        if (!user || ! message){
            console.log('no hay usuario o mensaje ')
            return reject('no hay usuario o mensaje ');
        } else {
            store.add(fullMessage);
            resolve(fullMessage);
        }
    });
}

function getMessages(){
    return new Promise ( (resolve ,  reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addMessage,
    getMessages
} 
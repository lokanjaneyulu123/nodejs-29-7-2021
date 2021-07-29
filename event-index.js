// const EventEmitter = require('events');
// // const event = require('events');
// const event = new EventEmitter();  //registering the events
// event.on('say-my-name', () => {
//     console.log('your name is lok');
// });
// event.on('say-my-name', () => {
//     console.log('your name is anjaneyulu');
// });
// event.on('say-my-name', () => {
//     console.log('your name is hello');
// });

// event.emit("say-my-name"); //from one event multiple functions can be called.


const EventEmitter = require('events');
// const event = require('events');
const event = new EventEmitter();
event.on('checkPage', (sc, msg) => {            //function defining
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit('checkPage', 200, "ok"); //function call
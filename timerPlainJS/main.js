class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
  }

  emit(eventName, data) {
    const event = this.events[eventName];
    if(event) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }
  }
}


const timer = document.querySelector('.timer');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnRestart = document.querySelector('.btn-restart');
let timerValue = parseInt(timer.firstChild.nodeValue);




btnStart.addEventListener('click', () => {
  emitter.emit('event:timerStart', {timerValue: timerValue});
});


let emitter = new EventEmitter();
emitter.subscribe('event:timerStart', data => {
  timer.innerHTML = `timer is: ${data.time}`;
});


class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);

    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
    }
  }

  emit(eventName, data) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }
  }
}


const timerDir = document.querySelector("#timer");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnRestart = document.querySelector(".btn-restart");

let emitter = new EventEmitter();
//  ----------------------------------------------


const state = {
  'timerON': false,
  'counter': 60
}

// add event listener to btnStart. If it clicks state btnStart becomes true
// if it clicks another time state btnStart becomes false
emitter.subscribe("event:timerON", (data) => {
  state.timerON = data.timerON;
});


btnStart.addEventListener("click", () => {
  emitter.emit("event:timerON", { timerON: state.timerON == true ? false : true });
});


function render(state) {

  if (state.timerON && state.timerON >= 0) {
    setInterval(() => {
      state.counter = state.counter - 1;
      console.log(state.counter);
    }, 1000);

  }

  // if (state.timerON) {
  //   let timer = state.counter;
  //   let minutes, seconds;

  //   setInterval(function test() {
  //     minutes = parseInt(timer / 60, 10);
  //     seconds = parseInt(timer % 60, 10);

  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;

  //     if (--timer < 0) {
  //       timer = 0;
  //     }
  //   }, 1000);
  // }


  return `${state.counter}`
}

// По изменению состояния мы должны вызывать timerDir.innerHTML = render(state) // !!!

// function render(state) {
//   return `${state.counter}`
// }

// timerDir.innerHTML = render(state) // !!!
// -----------------------------------------------


// let timerValue = parseInt(timer.firstChild.nodeValue);



// emitter.subscribe("event:timerStart", data => {
//   timer.innerHTML = startTimer.test(data.timerValue);
// });

// btnStart.addEventListener("click", () => {
//   emitter.emit("event:timerStart", { timerValue: timerValue });
// });

// function timerFn() {
//   setInterval(timerStart(timerValue), 1000);
// }

// function timerStart(timerValue) {
//   for (; timerValue >= 0; timerValue--) {
//     setTimeout(console.log(timerValue), 1000);
//   }
// }

// timerStart(timerValue);

// -----------------------------------

function startTimer(timerValue) {
  let timer = timerValue;
  let minutes, seconds;

  setInterval(function test() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (--timer < 0) {
      timer = 0;
    }
    return seconds;
  }, 1000);
}
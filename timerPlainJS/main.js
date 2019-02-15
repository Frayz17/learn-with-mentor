
class StatefulEmitter {
  constructor (initialState) {
    this.state = initialState
    this.events = {}
  }

  on (eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(fn)

    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn)
    }
  }

  emit (eventName, data) {
    const handlers = this.events[eventName]
    if (handlers.length) {
      for (let handler of handlers) {
        handler.call(null, data)
      };
    }
  }

  setState (newStateOrFn) {
    if (typeof newStateOrFn === 'function') {
      this.state = newStateOrFn(this.state)
    } else {
      this.state = newStateOrFn
    }
    this.emit(this.state)
  }
}

// data -----------------------------------------
const timerDir = document.querySelector('#timer')
const btnStart = document.querySelector('.btn-start')
const btnStop = document.querySelector('.btn-stop')
const btnRestart = document.querySelector('.btn-restart')
let state$ = new StatefulEmitter()
//  ---------------------------------------------
// state$.on(state => timerDir.innerHTML = render(state))

// add event listener to btnStart. If it clicks, state btnStart becomes - true
// if it clicks another time, state btnStart becomes - false
state$.on('', () => {

})

btnStart.addEventListener('click', () => {
  state$.emit('')
})

// state$.on("event:timerON", (data) => {
//   state.timerON = data.timerON;
// });

// btnStart.addEventListener("click", () => {
//   state$.emit("event:timerON", { timerON: state.timerON == true ? false : true });
// });

// function render(state) {
//   if (state.timerON && state.timerON >= 0) {
//     setInterval(() => {
//       state.counter = state.counter - 1;
//       console.log(state.counter);
//     }, 1000);

//   }

//   // if (state.timerON) {
//   //   let timer = state.counter;
//   //   let minutes, seconds;

//   //   setInterval(function test() {
//   //     minutes = parseInt(timer / 60, 10);
//   //     seconds = parseInt(timer % 60, 10);

//   //     minutes = minutes < 10 ? "0" + minutes : minutes;
//   //     seconds = seconds < 10 ? "0" + seconds : seconds;

//   //     if (--timer < 0) {
//   //       timer = 0;
//   //     }
//   //   }, 1000);
//   // }

//   return `${state.counter}`
// }


class StatefulEmitter {
  constructor () {
    this.state = {
      timerON: false,
      counter: 60
    }
    this.events = {}
  }

  subscribe (eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(fn)

    return () => {
      this.events[eventName] = this.events[eventName].filter((eventFn) => {
        return fn !== eventFn
      })
    }
  }

  emit (eventName, data) {
    const handlers = this.events[eventName]
    if (handlers !== undefined) {
      console.log('this.events:   ' + this.events[eventName])
      console.log('handlers:  ' + handlers)
      if (handlers.length) {
        for (let handler of handlers) {
          handler.call(null, data)
        }
      }
    }
  }

  // toggleState () {
  //   this.setState(this.getState === true ? false : true)
  // }

  getState () {
    return this.state
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

btnStart.addEventListener('click', () => {
  let bool = state$.getState().timerON === true ? false : true
  state$.setState(bool)

  if (btnStart.innerHTML === 'start') btnStart.innerHTML = 'pause'
  else btnStart.innerHTML = 'start'
})

btnStop.addEventListener('click', () => {

})




// btnStart.addEventListener('click', () => {
//   state$.emit("event:timerON", { timerON: state.timerON == true ? false : true });
// });

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

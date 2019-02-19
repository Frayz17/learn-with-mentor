
class StatefulEmitter {

  constructor (initialState) {
    this.state = initialState
    this.handlers = {}
  }

  subscribe (eventName, fn) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = []
    }

    this.handlers[eventName].push(fn)

    return () => {
      this.handlers[eventName] = this.handlers[eventName].filter((eventFn) => {
        return fn !== eventFn
      })
    }
  }

  emit (eventName, data) {
    const handlers = this.handlers[eventName]
    if (handlers !== undefined) {
      // console.log('this.handlers:   ' + this.handlers)
      // console.log('handlers:  ' + handlers)
      if (handlers.length) {
        for (let handler of handlers) {
          handler.call(null, data)
        }
      }
    }
  }

  setState (newStateOrFn) {
    if (typeof newStateOrFn === 'function') {
      this.state = newStateOrFn(this.state)
    } else {
      this.state = newStateOrFn
    }
    this.emit('runningState', this.state)
  }
}

// data -----------------------------------------
const timerDir = document.getElementById('timer')
const btnStart = document.querySelector('.btn-start')
const btnStop = document.querySelector('.btn-stop')
const btnOneMin = document.querySelector('.btn-oneMin')
const btnTwoMin = document.querySelector('.btn-twoMin')
const btnRestart = document.querySelector('.btn-restart')

let state$ = new StatefulEmitter({
  running: false, // -- данные передаём в клиентском коде (на этапе тестов он может быть в том же файле
  counter: 20
})
//  ---------------------------------------------

btnStart.addEventListener('click', () => {
  let counter = state$.state.counter
  state$.setState({
    running: true,
    counter: counter
  })
})

btnStop.addEventListener('click', () => {
  let counter = state$.state.counter
  state$.setState({
    running: false,
    counter: counter
  })
})

btnOneMin.addEventListener('click', () => {
  state$.setState({
    counter: 60,
    running: false
  })
})

btnTwoMin.addEventListener('click', () => {
  state$.setState({
    counter: 120,
    running: false
  })
})

state$.subscribe('runningState', state => render(state))

function render (state) {
  console.log(state)
  timerDir.innerHTML = state.counter

  if (state.running && state.counter > 0) {   
    let timerStart = setInterval(() => {
      timerDir.innerHTML = state.counter
      state.counter--
    }, 1000)
  } else {
    clearInterval(timerStart);
  }
  
}
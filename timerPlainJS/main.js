
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
const btnThreeMin = document.querySelector('.btn-threeMin')
const btnFiveMin = document.querySelector('.btn-fiveMin')
const btnRestart = document.querySelector('.btn-restart')

let state$ = new StatefulEmitter({
  running: false, // -- данные передаём в клиентском коде (на этапе тестов он может быть в том же файле
  counter: 0
})
//  ---------------------------------------------

let idTimer

btnStart.addEventListener('click', () => {
  state$.setState((state) => {
    return {
      running: true,
      counter: state.counter
    }
  })

  if (state$.state.counter > 0) {
    idTimer = timer()
  }
})

btnStop.addEventListener('click', () => {
  state$.setState((state) => {
    return {
      running: false,
      counter: state.counter
    }
  })

  clearInterval(idTimer)
})

btnRestart.addEventListener('click', () => {
  state$.setState((state) => {
    return {
      running: false,
      counter: 60
    }
  })

  clearInterval(idTimer)
})

btnOneMin.addEventListener('click', () => {
  state$.setState((state) => {
    return {
      running: false,
      counter: 60
    }
  })

  clearInterval(idTimer)
})

btnThreeMin.addEventListener('click', () => {
  state$.setState((state) => {
    return {
      running: false,
      counter: 180
    }
  })

  clearInterval(idTimer)
})

btnFiveMin.addEventListener('click', () => {
  state$.setState((state) => {
    return {
      running: false,
      counter: 300
    }
  })

  clearInterval(idTimer)
})

state$.subscribe('runningState', state => render(state))

function render (state) {
  let minutes = Math.floor(state.counter / 60).toString()
  let seconds = Math.floor(state.counter % 60).toString()
  if (seconds === '0') {
    seconds = seconds + '0'
  }

  let clockView = `${minutes}:${seconds}`

  timerDir.innerHTML = clockView

  if (state.running === true) {
    btnStart.disabled = true
  } else {
    btnStart.disabled = false
  }

  if (state.counter <= 0) {
    clearInterval(idTimer)
  }
}

function timer () {
  let timerStart = setInterval(() => {
    tick(state$)
  }, 1000)

  return timerStart
}

function tick (state$) {
  state$.setState((state) => {
    return {
      counter: state.counter - 1,
      running: state.running
    }
  })
}

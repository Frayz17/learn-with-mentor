
class StatefulEmitter {

  // первоначально у меня был такой конструктор

      // constructor (initialState) {
      //   this.state = initialState
      //   this.handlers = {}
      // }

  // this.state у меня принимала данные типа булеан и отвечала за состояние:
  // включить/выключить таймер
  // при такой реализации btnStart.addEventListener работает корректно и переключает состояние

  // но когда я принялся реализовывать counter, то подумал, что свойство емиттера this.state
  // у меня неправильно реализовано в принципе.  
  // Оно не должно принимать данные типа булеан, а должно быть объектом, 
  // который содержит все свойства состояния: "таймер включен" и "счетчик времени".
  // Но с такой реализацией у меня метод setState перестал работать.
  // Как модифицировать setState, что б он работал с this.state и this.handlers, в данной реализации ?

  // В методе setState есть вызов метода "this.emit(this.state)"
  // я не могу в полной мере разобраться как он работает в данном контексте, так как в первоначальной
  // реализации, которую ты мне скинул, при срабатывании "btnStart.addEventListener" возвращалась ошибка
  // Uncaught TypeError: Cannot read property 'length' of undefined

  // Что бы избежать этой ошибки:
  // В методе emit() я добавляю if (handlers !== undefined), тогда "btnStart.addEventListener" работает,
  // Мне кажется что это костыль, так как обработчик handler должен вызывать ивенты, в массиве handlers.
  // но ведь и ивентов там получается никаких нет на данный момент.

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
  if (state.running) {
    setInterval(() => {
      timerDir.innerHTML = state.counter - 1
    }, 500)
  }
  
  // if (state.running) {
  //   //  timer start
  // } else {
  //   // timer stop
  // }
}





// ------------------------------------------------------------
// ------------------------------------------------------------
// ------ Ниже черновики кода, можно не смотреть---------------
// ------------------------------------------------------------

// btnStart.addEventListener('click', () => {
//   state$.emit('event:timerToggle', state$.getState() === true ? false : true)

//   if (btnStart.innerHTML === 'start') btnStart.innerHTML = 'pause'
//   else btnStart.innerHTML = 'start'
// })

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

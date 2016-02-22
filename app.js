
 
class Bear {
  constructor () {
    this.type = 'bear'
  }
  says (say) {
    console.log(this.type + ' says ' + say)
  }
}

class Grizzly extends Bear {
  constructor () {
    super()
    this.type = 'grizzly'
  }
}

let bear = new Grizzly()
bear.says('growl')


/*/*
 * arrow functions
 */
let bears = ['polar', 'koala'].filter((bear) => {
  return bear !== 'koala'
})
console.log(bears)

class Bear {
  constructor () {
    this.type = 'bear'
  }
  says (say) {
    setTimeout(() => {
      console.log(this.type + ' says ' + say)
    }, 1000)
  }
}
var bear = new Bear()
bear.says()





/*
 * template strings
 */
let bear = 'grizzly'
let says = 'growl'
console.log(`The ${bear} says ${says}`)


/*
 * destructuring
 */
let bear = 'grizzly'
let says = 'growl'
let zoo = { bear, says }
//console.log(zoo)

let grizzly = { type: 'grizzly', many: 2 }
let { type, many } = grizzly
console.log(many, type)




/*
 * rest arguments
 */
function bears (...types) {
  console.log(types)
}
bears('polar', 'grizzly', 'brown')
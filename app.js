function Bear(type) {
  this.type = type
}
Bear.prototype.growl = function() {
  console.log('The ' + this.type + ' bear says grrr')
}

function Grizzly() {
  Bear.call(this, 'grizzly')
}
Grizzly.prototype = Object.create(Bear.prototype)


var grizzly = new Grizzly()
var polar = new Bear('polar')


grizzly.growl()
function Order(sizePie, toppings, numberPizzas){
  this.sizePie = sizePie;
  this.toppings = toppings;
  this.numberPizzas = numberPizzas;
}

Order.prototype.toppingsNumber =function(){
  return this.toppings.length;
}

$(document).ready(function() {



});

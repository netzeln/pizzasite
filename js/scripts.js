// var testPizza = new Order("medium",["cheese"],"2");
function Order(sizePie, toppings, numberPizzas){
  this.sizePie = sizePie;
  this.toppings = toppings;
  this.numberPizzas = numberPizzas;
}

Order.prototype.toppingsNumber =function(){
  return this.toppings.length;
}

Order.prototype.sizeCost =function(){

  if (this.sizePie === "xLarge"){
    return  14;
  } else if (this.sizePie === "large"){
    return 12;
  } else if (this.sizePie === "medium"){
    return 10;
  } else{
    return 8;
  }
}

var orderCost = function(testPizza){
  return (testPizza.sizeCost() + (testPizza.toppingsNumber() / 2)) * testPizza.numberPizzas;

}

// var orderCost = function(Order)){
//   var
// }
$(document).ready(function() {



});

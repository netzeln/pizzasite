
function Pizza(sizePie, toppings, numberPizzas){
  this.sizePie = sizePie;
  this.toppings = toppings;
  this.numberPizzas = numberPizzas;
}

Pizza.prototype.toppingsNumber =function(){
  return this.toppings.length;
}

Pizza.prototype.sizeCost =function(){

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

var orderCost = function(newPizza){
  return (newPizza.sizeCost() + (newPizza.toppingsNumber() / 2)) * newPizza.numberPizzas;

}

// var orderCost = function(Order)){
//   var
// }
$(document).ready(function() {



});

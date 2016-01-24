
function Pizza(sizePie, toppings, numberPizzas){
  this.sizePie = sizePie;
  this.toppings = toppings;
  this.numberPizzas = numberPizzas;
}


Pizza.prototype.pizzaCost = function(){

      var pieCost;

      if (this.sizePie === "xLarge"){
        pieCost =  14;
      } else if (this.sizePie === "large"){
        pieCost = 12;
      } else if (this.sizePie === "medium"){
        pieCost = 10;
      } else if(this.sizePie === "small"){
        pieCost = 8;
      } else {
        pieCost = 0;
      }
      return (pieCost + (this.toppings.length / 2)) * this.numberPizzas;
      }



// var orderCost = function(Order)){
//   var
// }
$(document).ready(function() {



});

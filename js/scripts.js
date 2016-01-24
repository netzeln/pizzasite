
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

function Order(name, address, methodPayment, pizzasOrdered){
      this.name = name;
      this.address = address;
      this.methodPayment = methodPayment;
      this.pizzasOrdered =[];
  }


// $(document).ready(function() {
//   $("form.pizzaCreator")submit(function(event){
//     event.preventDefault();
//     var selectedSize = $("input#pieSize").val();
//     var selectedToppings = $("input[name=toppingCheck[]']:checked")
//     var selectedNumber = $("input#numberPies").val();
  //  var newPizza = new Pizza(selectedSize, selectedToppings,selected Number);
//   //would like to have  pizza added to order displayed. maybe as a list
//   });
//
//   $("form.getInfo")submit(function(){
//
//   });
//
//
// //would like to display total order cost if possible as the orders are added
// //grab names and delivery address to the order
//
// });

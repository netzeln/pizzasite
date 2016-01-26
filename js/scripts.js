
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

Pizza.prototype.addPizza = function(){
 yourOrder.pizzasOrdered.push(this);
 return yourOrder.pizzasOrdered;
}

function Order(name, address, methodPayment, pizzasOrdered){
      this.name = name;
      this.address = address;
      this.methodPayment = methodPayment;
      this.pizzasOrdered =[];
  }
var yourOrder = new Order();

// $(document).ready(function() {
//
// var yourOrder = new Order(yourName, yourAddress, yourPayment, yourPies);
//
//   $("form.pizzaCreator")submit(function(event){
//     event.preventDefault();
//     var selectedSize = $("input#pieSize").val();
//     var selectedToppings = [];
        // $("input[name=toppingCheck[]']:checked").map(function(){
        //     selectedToppings.push($(this).val());
        //   };
//     var selectedNumber = $("input#numberPies").val();
//     var newPizza = new Pizza(selectedSize, selectedToppings, selectedNumber);
//    yourOrder.pizzasOrdered.push(newPizza);
//   //would like to have  pizza added to order displayed. maybe as a list
//   });
// //
//   $("form.getInfo")submit(function(event){
//     event.preventDefault();
//     var yourName = $("form#name").val();
//     var yourAddress = $("form#address").val();
//     var yourPayment = $("form#payment").val();
//     var yourPies = [];
//   });
// //
// //
// // //would like to display total order cost if possible as the orders are added
// // //grab names and delivery address to the order
// //
// });


function Pizza(sizePie, toppings, numberPizzas, pizzasCost){
  this.sizePie = sizePie;
  this.toppings = toppings;
  this.numberPizzas = numberPizzas;
//I know it's wrong to have this here. I tried very hard to have it be a prototype, but I coudn't make two prototypes talk to each other, or figure out how to write the "expect" statements.
  this.pizzasCost = function(){
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
}


// Pizza.prototype.pizzaCost = function(){
//     var pieCost;
//       if (this.sizePie === "xLarge"){
//         pieCost =  14;
//       } else if (this.sizePie === "large"){
//         pieCost = 12;
//       } else if (this.sizePie === "medium"){
//         pieCost = 10;
//       } else if(this.sizePie === "small"){
//         pieCost = 8;
//       } else {
//         pieCost = 0;
//       }
//       return (pieCost + (this.toppings.length / 2)) * this.numberPizzas;
// }

function Order(name, address, pizzasOrdered){
      this.name = name;
      this.address = address;
      this.pizzasOrdered =[];
  }

  // Order.prototype.totalCost = function(){
  //   var costOrder = 0;
  //
  //   console.log(pizzasOrdered);
  //     this.pizzasOrdered.forEach(function(pizza){
  //       costOrder += testOrder.pizzasCost;
  //   });
  //   return costOrder;
  // }



// var yourOrder = new Order();

$(document).ready(function() {


$("form.getInfo").submit(function(event){
  event.preventDefault();
  var yourName = $("#name").val();
  var yourAddress = $("form#address").val();
  var yourPies = [];
  var yourOrder = new Order(yourName, yourAddress, yourPayment, yourPies);
console.log(yourName);
console.log(yourAddress);
console.log(yourPies);
console.log(yourOrder);
});

  $("form.pizzaCreator").submit(function(event){
    event.preventDefault();
    var selectedSize = $("#pieSize").val();
    var selectedToppings = [];
        $("input[name=toppingCheck[]']:checked").map(function(){
            selectedToppings.push($(this).val());
          });
    var selectedNumber = $("input#numberPies").val();
    var newPizza = new Pizza(selectedSize, selectedToppings, selectedNumber);
    console.log(newPizza)
  yourPies.push(newPizza);
  //would like to have  pizza added to order displayed. maybe as a list
  });
//

// //
// //
// // //would like to display total order cost if possible as the orders are added
// // //grab names and delivery address to the order
// //
 });

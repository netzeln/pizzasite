
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

function Order(name, address, pizzasOrdered){
      this.name = name;
      this.address = address;
      // this.methodPayment = methodPayment;
      this.pizzasOrdered =[];
  }

  Order.prototype.totalCost = function(){
    var costOrder = [];
    // var pizzasInOrder = yourOrder.pizzasOrdered;
    yourOrder.pizzasOrdered.forEach(function(pizza){
      // costOrder = parseInt(costOrder) + this.pizzaCost();
        costOrder.push(pizza.pizzaCost());
      console.log(costOrder);
    });
    return costOrder;
  }
// var yourOrder = new Order();

$(document).ready(function() {

// var yourOrder = new Order(yourName, yourAddress, yourPayment, yourPies);

  $("form#getOrder").submit(function(event){
    event.preventDefault();
    var yourName = $("input#order-name").val();
    var yourAddress = $("input#address").val();
    // var yourPayment = $("form#payment").val();
    var yourPies = [];
    var selectedSize = $("#pieSize").val();
    var selectedToppings = []
    $("input[name='toppingCheck']:checked").each(function ()
      {
            selectedToppings.push($(this).val());
      });



    var selectedNumber = $("#numberPies").val();
    var yourOrder = new Order(yourName, yourAddress, yourPies);
    var newPizza = new Pizza(selectedSize, selectedToppings, selectedNumber);
   yourOrder.pizzasOrdered.push(newPizza);
   console.log(newPizza);
   console.log(yourOrder);
  //would like to have  pizza added to order displayed. maybe as a list
  });
    });
//



  // });
//
// //
// // //would like to display total order cost if possible as the orders are added
// // //grab names and delivery address to the order
// //
// });

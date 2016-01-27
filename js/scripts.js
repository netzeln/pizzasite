
function Pizza(sizePie, toppings, numberPizzas){
  this.sizePie = sizePie;
  this.toppings = toppings;
  this.numberPizzas = parseInt(numberPizzas);
  this.cost=0;
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

// Pizza.prototype.addPizza = function(){
//  yourOrder.pizzasOrdered.push(this);
//  return yourOrder.pizzasOrdered;
// }

function Order(name, address, pizzasOrdered){
      this.name = name;
      this.address = address;
      // this.methodPayment = methodPayment;
      this.pizzasOrdered =[];
  }

  Order.prototype.totalCost = function(){
    var costOrder = 0;
   this.pizzasOrdered.forEach(function(Pizza){
     costOrder = costOrder + Pizza.cost;
   });
    // $(this.pizzasOrdered).each(function(pizza){
    //   costOrder = costOrder + pizza.cost.val();
    //   console.log(costOrder);
    // });
    return costOrder;
  }


$(document).ready(function() {

  $("form#getOrder").submit(function(event){
    event.preventDefault();
    var yourName = $("input#order-name").val();
    var yourAddress = $("input#address").val();
    // var yourPayment = $("form#payment").val();
    var yourOrder = new Order(yourName, yourAddress, yourPies);
    var yourPies = [];

    $(".pizza-Creator").each(function(){
      var selectedSize = $(this).find("#pieSize").val();
      var selectedToppings = []
        $(this).find("input[name='toppingCheck']:checked").each(function (){
        selectedToppings.push($(this).val());
        });
      var selectedNumber = $(this).find("#numberPies").val();
      var newPizza = new Pizza(selectedSize, selectedToppings, selectedNumber);
        yourOrder.pizzasOrdered.push(newPizza);
        newPizza.cost = newPizza.pizzaCost();
        console.log(newPizza);
        console.log(newPizza.pizzaCost());
      });



   console.log(yourOrder);

   console.log(yourOrder.totalCost());
  //would like to have  pizza added to order displayed. maybe as a list
  });

  $(".add-another-pizza").click(function(){
    $("#pizza-creation").append('<div class="pizza-Creator">' +
                                  '<div>' +
                                    '<h4> What size Pie would you like?</h4>' +
                                    '<select class="form-control" id="pieSize">' +
                                      '<option value="small" selected>Small (10 inch, $8)</option>' +
                                      '<option value="medium">Medium (12 inch, $10)</option>' +
                                      '<option value="large">Large (14 inch, $12)</option>' +
                                      '<option value="xLarge">Extra Large (16 inch, $14)</option>' +
                                    '</select>' +
                                  '</div>' +
                                  '<div class="toppings">' +
                                    '<h4>Pick Your Toppings ($.50 each)</h4>' +
                                    '<label class="checkbox-inline">' +
                                    '<input type="checkbox"name="toppingCheck"  id="inlineCheckbox1" value="Extra Cheese"> Extra Cheese' +
                                    '</label>' +
                                    '<label class="checkbox-inline">' +
                                    '<input type="checkbox" name="toppingCheck" id="inlineCheckbox2" value="Pepperoni"> Pepperoni' +
                                    '</label>' +
                                    '<label class="checkbox-inline">' +
                                    '<input type="checkbox"name="toppingCheck" id="inlineCheckbox3" value="Onion"> Onions' +
                                    '</label>' +
                                    '<label class="checkbox-inline">' +
                                    '<input type="checkbox"name="toppingCheck"  id="inlineCheckbox4" value="Mushrooms"> Mushrooms' +
                                    '</label>' +
                                    '<label class="checkbox-inline">' +
                                    '<input type="checkbox"name="toppingCheck"  id="inlineCheckbox5" value="Green Peppers"> Green Peppers' +
                                    '</label>' +
                                  '</div>'+
                                  '<div >' +
                                    '<label for="numberPies"><strong>How Many?:</strong></label>' +
                                    '<input id="numberPies" type="number" value = 1>' +
                                  '</div>' +
                                '</div> Want Another?');
                          });

   });
//
// //
// // //would like to display total order cost if possible as the orders are added
// // //grab names and delivery address to the order
// //
// });

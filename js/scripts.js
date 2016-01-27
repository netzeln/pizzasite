
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

Pizza.prototype.describePie = function(){
   var toppingsList = this.toppings.toString();
  return this.numberPizzas + " " + this.sizePie + " Pizza(s) with " + toppingsList;

}

function Order(name, address, delivery, methodPayment, pizzasOrdered){
      this.name = name;
      this.address = address;
      this.delivery = delivery;
      this.methodPayment = methodPayment;
      this.pizzasOrdered =[];
  }

  Order.prototype.totalCost = function(){
    var costOrder = 0;
   this.pizzasOrdered.forEach(function(Pizza){
     costOrder = costOrder + Pizza.cost;
   });

    return (costOrder).toFixed(2);
  }

 Order.prototype.totalPies = function(){
   var totalNumberPies = 0;
   this.pizzasOrdered.forEach(function(Pizza){
     totalNumberPies = totalNumberPies + Pizza.numberPizzas;
   });
   return totalNumberPies;
 }

 Order.prototype.tipCalculator = function(){
   if (this.totalCost() > 0){
     if (this.delivery === "pickup"){
       return ((this.totalCost()) * 0.15);
     } else if (this.delivery ==="delivered"){
       return (this.totalPies()) + 4;
     } else {
       return ((this.totalCost()) * 0.2);
     }
   }
   else {
   return  0;
  }
 }

Order.prototype.grandTotal = function(){

  var grandTotalTip = (parseFloat(this.totalCost()) + parseFloat(this.tipCalculator()));
  return grandTotalTip.toFixed(2);
}


$(document).ready(function() {

  $("form#getOrder").submit(function(event){
    event.preventDefault();
    var yourName = $("input#order-name").val();
    var yourDelivery = $("input[name='delivery']:checked").val();
    var yourAddress = $("input#address").val();
    var yourPayment = $("#payment").val();
    var yourOrder = new Order(yourName, yourAddress, yourDelivery, yourPayment );



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

      $(".orderConfirm").show();

      $(".printName").text(yourOrder.name);
      $(".address").text(yourOrder.address);
      $("#theTotalCost").empty().append(yourOrder.totalCost());
      $("#paymentMethod").text(yourPayment);

      if (yourOrder.tipCalculator() > 0){
          $("#tipAmount").text(" a $ " +(yourOrder.tipCalculator()).toFixed(2));
        }else{
          $("#tipAmount").text(" that you buy some pizzas. Here's a Tip while you're thinking 'Wise Man once Say: Forgiveness is Divine, but never pay full price for Late Pizza' -- 'Master Splinter'");
        }
      $("#grandTotal").text(yourOrder.grandTotal());

      $("ul#pizzaList").text("");
        yourOrder.pizzasOrdered.forEach(function(Pizza) {
          $("ul#pizzaList").append("<li>" + Pizza.describePie() + "</li>");
        });
      $("#showTip").click(function(){
        $("#viewTip").fadeIn();
      });
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

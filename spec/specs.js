describe('Pizza', function(){
  it("creates information for a new pizza", function(){
    var testPizza = new Pizza("xLarge",["cheese", "onion"],"1");
    expect(testPizza.sizePie).to.equal("xLarge");
    expect(testPizza.toppings).to.eql(["cheese", "onion"]);
    expect(testPizza.numberPizzas).to.equal(1);
  });



  it("adds the pizzaCost prototype to the pizza object", function(){
    var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
    expect(testPizza.pizzaCost()).to.equal(34.50);
  });


});

describe ('Order', function(){
  it("adds information about the order including name, address and the pizzas ordered", function(){
    var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
    var testPizza2 = new Pizza("xLarge",["cheese"],"1");
    var testOrder = new Order("Timmy", "123 Sesame St","pickup", "cash", [testPizza, testPizza2]);
    expect(testOrder.name).to.equal("Timmy");
    expect(testOrder.address).to.equal("123 Sesame St");
    expect(testOrder.delivery).to.equal("pickup");
    expect(testOrder.methodPayment).to.equal("cash");
    expect(testOrder.pizzasOrdered).to.eql([]);
  });


  it("adds the totalCost method prototype to the Order object",function(){
    var testPizza = new Pizza("medium",["cheese", "onion"],2);
    var testPizza2 = new Pizza("small", ["mushroom", "onion"], 1 );
    var testOrder = new Order("Timmy", "123 Sesame St", "delivery", "cash", [testPizza, testPizza2]);
    expect(testOrder.totalCost()).to.equal(31);
  });

  it ("addst the totalNumberPies prototype to calculate the total number of pizzas in an order", function(){
    var testPizza = new Pizza("medium",["cheese", "onion"],2);
    var testPizza2 = new Pizza("small", ["mushroom", "onion"], 1 );
    var testOrder = new Order("Timmy", "123 Sesame St", "delivery", "cash", [testPizza, testPizza2]);
    expect(testOrder.totalPies()).to.equal(3);
  });

  it ("adds the tip calculator prototype to order object", function(){
    var testPizza = new Pizza("medium",["cheese", "onion"],2);
    var testOrder = new Order("Timmy", "123 Sesame St", "delivered", "cash", [testPizza]);
    expect (testOrder.tipCalculator).to.equal(6);

  });
});

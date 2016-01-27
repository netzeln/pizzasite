describe('Pizza', function(){
  it("creates information for a new pizza", function(){
    var testPizza = new Pizza("xLarge",["cheese", "onion"],"1");
    expect(testPizza.sizePie).to.equal("xLarge");
    expect(testPizza.toppings).to.eql(["cheese", "onion"]);
    expect(testPizza.numberPizzas).to.equal("1");
  });



  it("adds the pizzaCost prototype to the order object", function(){
    var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
    expect(testPizza.pizzaCost()).to.equal(34.50);
  });

  it("adds the addPizza method prototype to the Order object",function(){
    var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
  var testOrder = new Order("Timmy", "123 Sesame St", "cash", [testPizza])
    expect(testPizza.addPizza()).to.eql({testPizza});

  });
});

describe ('Order', function(){
  it("adds information about the order including name, address and the pizzas ordered", function(){
    var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
    var testPizza2 = new Pizza("xLarge",["cheese"],"1");
    var testOrder = new Order("Timmy", "123 Sesame St", "cash", []);
    expect(testOrder.name).to.equal("Timmy");
    expect(testOrder.address).to.equal("123 Sesame St");
    expect(testOrder.methodPayment).to.equal("cash");
    expect(testOrder.pizzasOrdered).to.eql([]);
  });


  it("adds the totalCost method prototype to the Order object",function(){
    var testPizza = new Pizza("medium",["cheese", "onion"],2);
    var testPizza2 = new Pizza("small", ["mushroom", "onion"], 1 );
    var yourOrder = new Order("Timmy", "123 Sesame St", "cash", [testPizza, testPizza2]);
    expect(yourOrder.totalCost()).to.equal(31);

  });
});

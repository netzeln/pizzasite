describe('Pizza', function(){
  it("creates information for a new pizza", function(){
    var testPizza = new Pizza("xLarge",["cheese", "onion"],"2");
    expect(testPizza.sizePie).to.equal("xLarge");
    expect(testPizza.toppings).to.eql(["cheese", "onion"]);
    expect(testPizza.numberPizzas).to.equal("2");
    expect(testPizza.pizzasCost()).to.equal(30);

  });



//   it("adds the pizzaCost prototype to the order object", function(){
//     var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
//     expect(testPizza.pizzaCost()).to.equal(34.50);
//   });  //
//
});

describe ('Order', function(){
  it("adds information about the order including name, address and the pizzas ordered", function(){
    var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
    var testPizza2 = new Pizza("xLarge",["cheese"],"1");
    var testOrder = new Order("Timmy", "123 Sesame St", []);
    expect(testOrder.name).to.equal("Timmy");
    expect(testOrder.address).to.equal("123 Sesame St");
    
    expect(testOrder.pizzasOrdered).to.eql([]);
  });

  // it("adds the totalCost method prototype to the Order object",function(){
  //   var testPizza = new Pizza("medium",["cheese", "onion"],2);
  //   var testPizza2 = new Pizza("small", ["mushroom", "onion"], 1 );
  //   var testOrder = new Order("Timmy", "123 Sesame St", "cash", [testPizza, testPizza2]);
  //   expect(testOrder.totalCost()).to.equal(31);
// describe ("pushPizza", function(){
//   it("pushes a Pizza Object into Order.PizzasOrdered", function(){
//     var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
//     var testOrder = new Order("Timmy", "123 Sesame St", "cash", []);
//     expect(testOrder.pizzasOrdered[0]).to.eql(testPizza);
//   });
// });


});

// it("adds the addPizza method prototype to the Order object",function(){
//   var testPizza = new Pizza("medium",["cheese", "onion", "pepperoni"],"3");
// var testOrder = new Order("Timmy", "123 Sesame St", "cash", [testPizza])
//   expect(testPizza.addPizza()).to.eql({testPizza});

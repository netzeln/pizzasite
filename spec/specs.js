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
});

// describe ("Order", function(){
//   it("combines the pizzas into a complete order", function(){
//     var testOrder - new Order
//     expect()
//   });
// });

// describe("pizzaCost", function(){
//   it("calculates the cost of the whole order", function(){
//       var newPizza = new Pizza("medium",["cheese", "onion"],"2");
//     expect(orderCost(newPizza)).to.equal(22);
//   });
// });

// describe("orderCost", function(){
//   var testPizza = new Order("large",["cheese", "onion"],"1");
//   it("sets the base cost of the pizza by size",function(){
//     expect(orderCost(sizePie)).to.equal(12);
//   })
// })

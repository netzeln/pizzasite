describe('Order', function(){
  it("takes the order information and writes it to the order", function(){
    var testPizza = new Order("xLarge",["cheese", "onion"],"1");
    expect(testPizza.sizePie).to.equal("xLarge");
    expect(testPizza.toppings).to.eql(["cheese", "onion"]);
    expect(testPizza.numberPizzas).to.equal("1");
  });

  it("adds the toppingsNumber proptotype to the Order object", function(){
    var testPizza = new Order("xLarge",["cheese", "onion"],"1");
    expect(testPizza.toppingsNumber()).to.equal(2);
  });

  it("adds the sizeCost method prototype to the order object", function(){
    var testPizza = new Order("large",["cheese", "onion"],"1");
    expect(testPizza.sizeCost()).to.equal(12);
  });
});

describe("orderCost", function(){
  it("calculates the cost of the pizza", function(){
      var testPizza = new Order("medium",["cheese", "onion"],"2");
    expect(orderCost(testPizza)).to.equal(22);
  });
});

// describe("orderCost", function(){
//   var testPizza = new Order("large",["cheese", "onion"],"1");
//   it("sets the base cost of the pizza by size",function(){
//     expect(orderCost(sizePie)).to.equal(12);
//   })
// })

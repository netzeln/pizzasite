describe('Order', function(){
  it("takes the order information and writes it to the order", function(){
    var testPizza = new Order("large",["cheese", "onion"],"1");
    expect(testPizza.sizePie).to.equal("large");
    expect(testPizza.toppings).to.eql(["cheese", "onion"]);
    expect(testPizza.numberPizzas).to.equal("1");
  });

  it("adds the toppingsNumber proptotype to the Order object", function(){
    var testPizza = new Order("large",["cheese", "onion"],"1");
    expect(testPizza.toppingsNumber()).to.equal(2);
  });
});

describe

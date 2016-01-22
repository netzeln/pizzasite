describe('Order', function(){
  it("takes the order information and writes it to the order", function(){
    var testPizza = new Order("large",["cheese"],"1");
    expect(testPizza.sizePie).to.equal("large");
    expect(testPizza.toppings).to.eql(["cheese"]);
    expect(testPizza.numberPizzas).to.equal("1");
  });
});

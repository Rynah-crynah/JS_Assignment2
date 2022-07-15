var price = 10;
class calculateFruitCost{
    constructor(fruitName, quantity){
        this.fruitName = fruitName
        this.quantity = quantity
    }

}
var grocery = new calculateFruitCost("Orange", 30)
console.log(`${grocery.quantity} ${grocery.fruitName} for KES ${price*grocery.quantity}`);

class kioskCalculate{
    constructor(fruitName, quantity){
        this.fruitName = fruitName
        this.quantity = quantity
        this.fruitPriceList = {"SweetMelon":80,"Kiwi":50,"Strawberry":100},
        this.getTotalCost = function(){
            return `${quantity} ${fruitName} for KES ${quantity * this.fruitPriceList.Kiwi}`
        }
    }
}
var kioskCalc = new kioskCalculate("Kiwi",2)
console.log(kioskCalc.getTotalCost())


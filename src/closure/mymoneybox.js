/**function moneyBox(coins){
    let saveCoins = 0
    saveCoins+= coins
    console.log(saveCoins)
}
moneyBox(5) //No se guarda
moneyBox(5)**/

function moneyBox(){
    let saveCoins = 0
    function countCoins(coins){
        saveCoins += coins
        console.log('MoneyBox:'+ saveCoins)
    }
    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)
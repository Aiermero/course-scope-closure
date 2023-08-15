function greeting(){
    let userName = 'Elam'

    function displayUserName(){
        return 'Hello ${userName}'
    }
    return displayUserName
}

const g = greeting()
console.log(g())
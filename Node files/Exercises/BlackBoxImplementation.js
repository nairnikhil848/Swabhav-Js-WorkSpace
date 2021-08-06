
nos = [10,24,32,40,5,6]

function filterByOdd(number){
    if(number%2 != 0){
        return true
    }
    //return false;
}

function filterByEven(number){
    if(number%2 == 0){
        return true
    }
    //return false;
}

function filterGreaterThanTen(number){
    return number > 10;
}

function filterNumbers(listofNos,predicateFn){
    let result = []
    for(let i=0;i<listofNos.length;i++){
        if(predicateFn(listofNos[i])){
            result.push(listofNos[i])
        }
    }
    return result;
}

console.log(filterNumbers(nos,filterByOdd));
console.log(filterNumbers(nos,filterByEven));
console.log(filterNumbers(nos,filterGreaterThanTen));
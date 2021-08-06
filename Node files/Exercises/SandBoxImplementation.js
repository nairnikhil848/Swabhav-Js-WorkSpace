
nos = [1,2,3,4,5]


function cubeNumbers(number){
    return number*number*number;
}
function addTenToNumbers(number){
    return number + 10;
}

function mapNos(noList,mapFn){
    let result = []
    for(let i=0;i<noList.length;i++){
        result.push(mapFn(noList[i]));
    }
    return result;
}

console.log(mapNos(nos,cubeNumbers));
console.log(mapNos(nos,addTenToNumbers));
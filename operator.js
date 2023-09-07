function traverseArray(array){
    let operator = array[0];
    let operand1 = array[1];
    let operand2 = array[2];
    if(Array.isArray(operand1)){
        operand1 = traverseArray(operand1);
    }
    if(Array.isArray(operand2)){
        operand2 = traverseArray(operand2);
    }
    let result = "( " + operand1 + " "+ operator + " " + operand2 + " )";
    return result;
}

array = ["<","a","b"]
console.log(traverseArray(array))

array1 = ["AND" , ["<","a","b"],["!=","e","f"]]
console.log(traverseArray(array1))

array2 = ["OR" , ["<","a","b"],["AND",["==","c","d"],["!=","e","f"]]]
console.log(traverseArray(array2))

array3 = ["AND" , [">",["==","g","h"],["<=","a","b"]],["OR",["==","c","d"],["!=","e","f"]]]
console.log(traverseArray(array3))

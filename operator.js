class Stack {
 
    constructor()
    {
        this.items = [];
    }
    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    top()
    {
        return this.items[this.items.length - 1];
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
function isOperator(element){
    if(element === "OR" || element === "AND" || element === "NOT"|| element === "==" || element === "!=" || element === ">" || element === "<" || element === ">=" || element === "<=" || element === "OR"){
        return true;
    }
    else 
        return false;
}
function traverseArray(array){
    let operators = new Stack();
    let operands = new Stack();
    array.forEach(element => {
        if(Array.isArray(element)){
            operands.push(traverseArray(element));
        }
        else if(isOperator(element)){
            operators.push(element);
        }
        else{
            operands.push(element);
        }
    });

    let operand2 = operands.pop();
    let operand1 = operands.pop();
    let operator = operators.pop();

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

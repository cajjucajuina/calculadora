function formatNumber(number){
    const numStr= number.toString()
    if(numStr === "Infinity"|| numStr === "-Infinity"){
        return "Erro"
    }
    if(numStr === "NaN"){
        return "Erro"
    }
    const maxDigits = 12
    if(Math.abs(number)>= 1e12){
return number.toExponetial(6)
    }
    if(number.isInteger(Number)){
        return numStr.toString()
    }
    const parts =numStr.split(".")
    if(part[0].length >= maxDigits){
        return number.toExponetial(6)

    }
const decimalPlaces =Math.min (maxDigits-parts[0].length-1,10)
return number.toFixed(decimalPlaces).replace(/\.?0+$/,"")
}


function isOperator(char){
    return ["+","-","*","/"].includes(char)
}
function getOperatorSymbol(operator){
    const symbols ={
        "+": "+" ,
        "-": "-" ,
        "*": "x" ,
        "/": "÷" ,
    }
    return symbols [operator] || operator
}
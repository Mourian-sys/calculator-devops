function calculate(operator){

    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("result").innerHTML="Result: Enter valid numbers";
        return;
    }

    let result;

    switch(operator){

        case "+":
            result=num1+num2;
            break;

        case "-":
            result=num1-num2;
            break;

        case "*":
            result=num1*num2;
            break;

        case "/":
            if(num2===0){
                document.getElementById("result").innerHTML="Cannot divide by zero";
                return;
            }
            result=num1/num2;
            break;

        default:
            result="Invalid";
    }

    document.getElementById("result").innerHTML="Result: "+result;
}

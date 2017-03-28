function main(){
    var operand1
    var operand2;
    var operatorbtn;
    
    var limit = 5 ;

    var result = $('#result');//for result display
    var error = $('#error'); //for error display
    var errMesg = 'You have reached the limit.'; 
    var addSign = $('#addSign'); //text slot for operator sign
    var signOperatorArr = ''; //array for operator
    var xVal = '';


    $('.numbers').click(function(){

        var num = $(this);


        if(xVal.length < limit ){

            var value = num.data('value');

            xVal += value;

            console.log(xVal);
        }

        else {
            console.log(errMesg);
            error.html(errMesg);
        }

        result.html(xVal)

        return xVal;

    });



    $('.operator').click(

        function(){

            var operator = $(this)

            if(operator){

                operatorbtn = operator.data('value');

                signOperatorArr += operatorbtn ;
                
                console.log(signOperatorArr)
                addSign.html(signOperatorArr);
                //            console.log(operatorbtn);
                console.log(signOperatorArr);

                return signOperatorArr;
            } 

        });

    $('#clearNum').click(function(){
        console.log(xVal.length);
        if(xVal){
            
            xVal.substring(0,xVal-1);
            console.log(xVal);

            return xVal;
        }
        //       deleteThem.pop();
        if(signOperatorArr){
            signOperatorArr.pop();
            return signOperatorArr;
        }
        console.log(signOperatorArr);
        result.html(arr);

    });



    function add(numerator,denominator){
        var result =  numerator + denominator;
        return result;
    }

    function subtractio(numerator,denominator){
        var result =  numerator - denominator;
        return result
    }

    function multiply(numerator , denominator){
        var result = numerator * denominator ;
        return result;
    }

    function divide(numerator, denominator){
        var result = numerator / denominator
        return result;
    }





}
$(document).ready(main);


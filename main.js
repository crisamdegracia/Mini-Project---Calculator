function main(){
    var operand1
    var operand2;
    var operatorbtn;

    var limit = 5 ; // limit of inputs

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

        result.html( xVal + signOperatorArr);

        return xVal;

    });



    $('.operator').click(

        function(){

            var operator = $(this);

            if(operator){

                operatorbtn = operator.data('value');

                if(operatorbtn.length === 1 ){

                    signOperatorArr = operatorbtn ;

                    console.log(signOperatorArr)


                }

                else {
                    signOperatorArr = operatorbtn;
                    return signOperatorArr;
                    console.log('else')
                }

                addSign.html( xVal + signOperatorArr );
                return signOperatorArr;
            } 



        });

    $('#clearNum').click(function() {

        var clearMe = $(this);

        console.log(xVal.length);

        if(xVal) {
            signOperatorArr = signOperatorArr.slice(0,-1);
            xVal = xVal.slice(0,-1);
        }
        
//        if(signOperatorArr.length === 1 ){
//            signOperatorArr = '';
//        }
        if(xVal.length <= 5 ) {

            if(error) {

                error.html('');
            }

        }

        result.html( xVal + signOperatorArr );

        return xVal, signOperatorArr ;
//        return signOperatorArr;
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


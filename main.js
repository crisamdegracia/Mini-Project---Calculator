function main(){
    var operand1
    var operand2;
    var operatorbtn; // input value for operators
    var limit = 5 ; // limit of inputs
    var result = $('#result');//for result display
    var error = $('#error'); //for error display
    var errMesg = 'You have reached the limit.'; 
    var addSign = $('#addSign'); //text slot for operator sign
    var signOperatorArr = ''; //array for operator
    var xVal = '';
    var cycle = false;
    var errorCounter = false ;

    $('.numbers').click(function(event){

        var num = $(this); // gets the value from list of numbers
        if(cycle === false){

            if(xVal.length < limit ){ // checks input if less than the limit
                var value = num.data('value');

                xVal += value; 
                operand1 = xVal;   
                console.log(xVal);
                result.html(xVal);
                console.log('operand 1: ' +operand1)
                return operand1;

            }

            else {
                console.log('aba')
                event.stopPropagation();
                event.preventDefault();

            }


        }

        if(cycle === true ){

            value = num.data('value');

            if(xVal.length < limit ){

                xVal += value; 
                operand2 = xVal;   
                console.log('operand 2: '+operand2);
                result.html(xVal);
                operatorbtn = '';
                if( operatorbtn === ''){
                    console.log(operatorbtn+' checking');
                    cycle = false ;

                }
                return operand2;
            }
            else { // else error
                console.log(errMesg);

                error.html(errMesg);
                event.stopImmediatePropagation();
                event.preventDefault();
            }
        }


        else { // else error
            console.log(errMesg);
            error.html(errMesg);
        }

        console.log(operand1 + '  First Number')
        console.log(operand1.length)
        console.log(operand2 + '  Second Number')


    });



    $('.operator').click( 

        function(){//checks if operator was clicked

            var operator = $(this);

            if(operator){

                operatorbtn = operator.data('value');

                if(operatorbtn !== '' ){

                    signOperatorArr = operatorbtn ;
                    cycle = true ;
                    xVal = '';
                    value = 0 ;
                    console.log(signOperatorArr)

                }

                else {
                    error.html('Invalid Input.');
                }

                result.html(signOperatorArr);
                return signOperatorArr;
            } 

        });

    $('#clearNum').click(

        function(e) { // delete every single string 

            var clearMe = $(this);

            if(operand1 !== '') {
                console.log(operand1.length)
                operand1 = operand1.slice(0,-1);
                result.html(operand1);
                if(error) {

                    error.html('');
                }
                return operand1;
            }  

            if(operand2 !== '' ) {

                operand2 = operand2.slice(0,-1);
                result.html(operand2);

                if(error) {

                    error.html('');
                }


                return operand2;
            }


            console.log('hi teddy')
            e.preventDefault();
            e.stopImmediatePropagation();



        });


    function errorFunc(errMesg){

        error.html(errMesg);

    }



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


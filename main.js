function main(){
    var operand1 = '' ;
    var operand2 = '' ;
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
    var dot = $('#dot');
    var dotCount = 0;
    var finalResult = '';
    
    $('.numbers').click(function(event){

        var num = $(this); // gets the value from list of numbers
        if(cycle === false){

            if(operand1.length < limit){ // checks input if less than the limit
                var value = num.data('value');

                operand1 += value;   
                console.log(operand1);
                result.html(operand1);
                console.log('operand 1: ' +operand1)
                return operand1;


            }
            else {
                return;
            }


        }

        if(cycle === true ){

            value = num.data('value');

            if(operand2.length < limit ){

                operand2 += value;   

                console.log('operand 2: '+operand2);

                result.html(operand2);

                operatorbtn = '';
                console.log(operatorbtn+' checking');
                //                    cycle = false ;
                return operand2;
            }


            else { // else error
                error.html(errMesg);
                console.log(errMesg);
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
        console.log(operand2.length)


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
            if(cycle === false){
                if(operand1 !== '' && operand1.length > 0 ) {

                    operand1 = operand1.slice(0,-1);
                    result.html(operand1);
                    console.log(operand1.length)
                    if(error) {

                        error.html('');
                    }
                    return clearMe.operand1;
                }  
            }

            if(operand2 !== '' && operand2.length > 0 ) {

                operand2 = operand2.slice(0,-1);
                result.html(operand2);
                console.log(operand2.length);
                if(error) {
                    error.html('');
                }
                return operand2;
            }

            // if has sign operator delete from last index string
            if(signOperatorArr !== '' && signOperatorArr.length > 0 ){ 
                signOperatorArr = signOperatorArr.slice(0,-1);
                result.html(signOperatorArr)
                
            }
            
            //if has final result delete from the last string
            if(finalResult !== '' && finalResult.length > 0 ){ 
                console.log(finalResult+' mahusay!')
                
                finalResult = finalResult.slice(0,-1);
                result.html(finalResult);
                 operand1 = '';
                operand2 = '';
                signOperatorArr = '';
                cycle = false;
            }

            else {
                operand1 = '';
                operand2 = '';
                signOperatorArr = '';
                cycle = false;
                finalResult = '';
                e.preventDefault();
                e.stopPropagation();
                console.log('hi teddy');
                console.log('operand 1: '+operand1.length)
                console.log('operand 2 : ' +operand2.length)
            }
        });


    $('#totalX').click(function(e){
        
        var x =  parseInt(operand1);
        var y =  parseInt(operand2);

        if(signOperatorArr === "+"){
            finalResult += x+y;
            result.html(finalResult);
            operand1 = '';
            operand2 = '';
            cycle = false;
            signOperatorArr = '';

        }
        if(signOperatorArr === "-"){
           finalResult += x-y;
            result.html(finalResult)
            operand1 = '';
            operand2 = '';
            cycle = false;
            signOperatorArr = '';
        }
        if(signOperatorArr === "*"){
            finalResult += x*y;
            result.html(finalResult)
            operand1 = '';
            operand2 = '';
            cycle = false;
            signOperatorArr = '';
        }
        if(signOperatorArr === "/"){
            finalResult += x/y;
            result.html(finalResult);
            operand1 = '';
            operand2 = '';
            cycle = false;
            signOperatorArr = '';
        }
        if(signOperatorArr === "%"){
            finalResult += x%y;
            result.html(finalResult)
            operand1 = '';
            operand2 = '';
            cycle = false;
            signOperatorArr = '';
        }
        //
        //        else {
        //            result.html('Can not resolve. ')
        //            e.preventDefault();
        //            e.stopPropagation();
        //        }

    });



}
$(document).ready(main);


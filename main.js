function main(){
    var operand1 = '';
    var operand2 = '';
    var operatorbtn = ''; // input value for operators
    var limit = 6 ; // limit of inputs
    var result = $('#result');//for result display
    var error = $('#error'); //for error display
    var errMesg = 'You have reached the limit.'; 
    var addSign = $('#addSign'); //text slot for operator sign
    //    var operatorbtn = ''; //array for operator but it's just a string LOL
    var xVal = '';
    var cycle = false;
    var errorCounter = false ;
    var dot = $('#dot');
    var dotCount = 0;
    var finalResult = '';


    $('.numbers').click(function(e){

        var self = $(this); // gets the value from list of numbers
        //Cycle checks the first and 2nd value
        e.preventDefault();
        e.stopPropagation();
        if(!cycle){

            //the value of numbers
            var value = self.data('value');

            if(value !== '' && operand1.length < limit){ // checks input if less than the limit

                //every number that clicks 
                operand1 += value;   
                //console.log(operand1);

                //displays the value of clicks
                result.html(operand1);

                //console.log('operand 1: ' +operand1)

                //returns with value
                return operand1;

            } else {
                error.html('Max 6 digits.')
                //return nothing
                return;
            }
        }/* if !cycle*/

        //if cycle is true then put the 2nd value
        else {

            self = $(this);
            //value of second number to be operate
            value = self.data('value');

            //checks the limit to be operate
            if(value !== '' && operand2.length < limit ){

                operand2 += value;   

                console.log('operand 2: '+operand2);

                //display the clicks on result field
                result.html(operand2);

                //not sure abt thie one looks like to remove the displayed operator
                operatorbtn = '';

                console.log(operatorbtn+' checking');
                //                    cycle = false ;
                return operand2;
            }


            else { // else error
                e.preventDefault();
                e.stopPropagation();
                error.html(errMesg);
                console.log(errMesg);
                e.preventDefault();
            }

        } 

        //        console.log(operand1 + '  First Number')
        //        console.log(operand1.length)
        //        console.log(operand2 + '  Second Number')
        //        console.log(operand2.length)

    });




    $('.operator').click( 

        function(e){//checks if operator was clicked
            //the value of operators like +,-,/,%
            var self = $(this);

            e.preventDefault();
            e.stopPropagation();

            //if there's a clicked operator
            if(operand1.length <= limit && operand1 !== '' ){

                //the sets its value
                operatorbtn = self.data('value');

                console.log('true');

                if(operatorbtn !== '' && (operand1.length < limit || operand2.length < limit ) ){


                    //what is this????
                    //                    xVal = '';

                    //                    console.log('i am xVal ' + xVal)

                    //value sets back to zero
                    //                    value = 0;
                    //making it true so the 2nd value will get value when operator is pressed
                    cycle = true;

                    //                    console.log("operator  " + operatorbtn)
                    console.log("operator  " + operatorbtn);
                    console.log("operand  " + operand1);
                    error.html('');
                    result.html(operatorbtn);
                    return operatorbtn;

                } else {
                    error.html('Invalid Input.');
                    console.log('nah nah nah')
                }

            } else {
                e.preventDefault();
                e.stopPropagation();
                console.log("Must be good! " + operand1)
                error.html('Max 6 digits.')
            }

        });

    $('#clearNum').click(

        function(e) { // delete every single string 

            var self = $(this);
            e.preventDefault();
            e.stopPropagation();
            //if cycle false
            //meaning if 1st value is not emoty
            if(!cycle){

                if(operand1 !== '' && operand1.length > 0 ) {

                    //removes the last string
                    operand1 = operand1.slice(0,-1);
                    result.html(operand1);

                    //keeping the result zero if deleted
                    if( result.val() === '' ){

                        result.html('0')
                    }

                    console.log(operand1.length)

                    //if there's an error
                    if(error) {

                        error.html('');
                    }

                    return operand1;
                }  
            }
            else if (cycle){
                if(operand2 !== '' && operand2.length > 0 ) {

                    operand2 = operand2.slice(0,-1);
                    result.html(operand2);
                    console.log(operand2.length);
                    if(error) {
                        error.html('');
                    }

                    //if result is zero then 
                    if( result.val() === '' ){
                        result.html('0')
                    }

                    return operand2;
                }
            }
            // if has sign operator delete from last index string
//            if(operatorbtn !== '' && operatorbtn.length > 0 ){ 
//                operatorbtn = operatorbtn.slice(0,-1);
//                result.html(operatorbtn)
//
//            }
//
//            //if has final result delete from the last string
//            if(finalResult !== '' && finalResult.length > 0 ){ 
//                console.log(finalResult+' mahusay!')
//
//                finalResult = finalResult.slice(0,-1);
//                result.html(finalResult);
//                operand1 = '';
//                operand2 = '';
//                operatorbtn = '';
//                cycle = false;
//            }
//
//            else {
//                operand1 = '';
//                operand2 = '';
//                operatorbtn = '';
//                cycle = false;
//                finalResult = '';
//                e.preventDefault();
//                e.stopPropagation();
//                console.log('hi teddy');
//                console.log('operand 1: '  + operand1.length)
//                console.log('operand 2 : ' + operand2.length)
//            }
        });

    
        $('#totalX').click(function(e){
    
            var x =  parseInt(operand1);
            var y =  parseInt(operand2);
    
            if(operatorbtn === "+"){
                finalResult += x+y;
                result.html(finalResult);
                operand1 = '';
                operand2 = '';
                cycle = false;
                operatorbtn = '';
    
            }
            if(operatorbtn === "-"){
                finalResult += x-y;
                result.html(finalResult)
                operand1 = '';
                operand2 = '';
                cycle = false;
                operatorbtn = '';
            }
            if(operatorbtn === "*"){
                finalResult += x*y;
                result.html(finalResult)
                operand1 = '';
                operand2 = '';
                cycle = false;
                operatorbtn = '';
            }
            if(operatorbtn === "/"){
                finalResult += x/y;
                result.html(finalResult);
                operand1 = '';
                operand2 = '';
                cycle = false;
                operatorbtn = '';
            }
            if(operatorbtn === "%"){
                finalResult += x%y;
                result.html(finalResult)
                operand1 = '';
                operand2 = '';
                cycle = false;
                operatorbtn = '';
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


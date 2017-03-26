function main(){
    var operand1
    var operand2;
    var operatorbtn;
 
    var counter = 0;
    var limit = 5 ;
    
    var result = $('#result');//for result display
    var error = $('#error'); //for error display
    var errMesg = 'You have reached the limit.'; 
    var addSign = $('#addSign'); //text slot for operator sign
    var arr = []; //array for numbers
    var signOperatorArr = []; //array for operator
    var index = 0; // index for array numbers
    

    $('.numbers').click(function(){
        
        var num = $(this);
        
//        counter = num.length ;
        
//        arr[index] = counter;
        
        console.log(arr)
        
        if(arr.length < limit ){

            var value = num.data('value');
            console.log(value);
            arr.push(value);

            console.log(arr);

        }
        
        else {
            console.log(errMesg);
            error.html(errMesg);
        }
        
        result.html(arr)
       
        return arr;
        
    });
    
    

    $('.operator').click(
        
        function(){
            
        var operator = $(this)

        if(operator){
            
            operatorbtn = operator.data('value');
            
            signOperatorArr.push(operatorbtn);
            
            addSign.html(arr+operatorbtn);
//            console.log(operatorbtn);
            console.log(signOperatorArr);
            
            return signOperatorArr;
        } 

    });
    
    $('#clearNum').click(function(){
       
      if(arr){
          arr.pop();
          return arr;
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

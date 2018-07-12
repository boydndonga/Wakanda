


// initializing jquery
$(document).ready(function(){
    // the form submit function event listener
    $("form").submit(function(event){
        // preventing the browser from reloading after submit button is pressed
        event.preventDefault();
        // declaring a variable that stores the input that is received from the user
        var noString = $("input#input1").val();
        // declaring a variable that stores the array that has been split at every plus(+) sign
        var Addition = noString.split('+');
        // declaring a variable that stores the number that has been added
        var sum = 0;
        // the add function that sums up numbers that have been input by the user
        var add = function(Addition){
            // a function that loops through the array created and adds the number into a variable number
            for (var number=0;number<=Addition.length-1;number++) {
                sum += parseInt(Addition[number]);
            }
        console.log(sum);
        }        
        add(Addition)
    });
});










// $(document).ready(function(){
//     $("form").submit(function(event){
//       event.preventDefault();
//       var noString = $("input#userInput").val();
//       var numArray = noString.split("+");
//       var sum = 0;
  
//       for (var x=0;x<=numArray.length-1;x++){
//         sum += parseInt(numArray[x]);
//       }
//       console.log(sum);
//     });
  
//   });
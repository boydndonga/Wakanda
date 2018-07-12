




$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var noString = $("input#input1").val();
        var Addition = noString.split('+');
        var sum = 0;
        for (var number=0;number<=Addition.length-1;number++) {
            sum += parseInt(Addition[number]);
        }
        console.log(sum);
            // var sum = 0;
            // var add = noArray.map( num =>{
            //     return sum += num
            // })
            // alert(sum);
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
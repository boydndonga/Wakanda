$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var noString = $("input#input1").val();
        var noArray = parseInt(noString.split(','));
        alert(noArray[1]);
    });
});
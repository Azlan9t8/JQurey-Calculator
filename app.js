$(document).ready(function(){
 
$(".cal").click(function(){

$("#display").val($("#display").val()+$(this).val())

})

$("#equal").click(function(){

    $("#display").val(eval($("#display").val()))
    
    })





})




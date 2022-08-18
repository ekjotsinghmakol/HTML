// function displayMessage (param1, param2) { var outerVariable = "Hi, ";
// function prepareGreetings () {
// return outerVariable + param1 + " " + param2;
// }
// return prepareGreetings ();
// }
// function testClosure() {
// var message = alert(displayMessage ("Your product has been added to", "the cart.")); 
// // document.getElementById("sampleDemoOfClosure").innerHTML = message;
// }
function testClosure (){
    alert("Your product has been added to the cart");
}

var arr1 =[1,2,3];
var arr2 = [...arr1,4,5];
$(document).ready(function(){
$("#b2").click(function(){
    
    document.getElementsByClassName("#d2").innerText = "arr2";
});
});

$(document).ready(function(){
    $("#b2").click(function(){
        
        $("img-1").attr("height", "500px");
    });
    });


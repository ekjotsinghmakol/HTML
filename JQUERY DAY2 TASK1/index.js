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
        
        $("container").attr("border", "none");
    });
    });

//factorial

$(document).ready(function(){
    $("#b5").click(function(){
        var x=fact(5);
        alert(x);
        document.getElementById("#div5").innerText=x;
    })
});

function fact(x){
    if(x==1)
    return 1;
    else
    return x*fact(x-1);
}

// sum
$(document).ready(function(){
    $("#b6").click(function(){
        var x=sum(5,6);
        alert(x);
        document.getElementById("sum").innerText=x;
    })
});

function sum(x,y){
    return x+y;
}s
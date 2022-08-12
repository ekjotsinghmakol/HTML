function buttonfunc(){
    alert("Your request has been submitted. We will get back to you shortly")
}
function getdetails(){  
    var d1=document.getElementById("exampleInputusername1").value;  
    var d2=document.getElementById("employeeid").value;  
    alert(d1 + "/"+ d2);  
    }  


  
const btn = document.getElementById('myb1');

btn.addEventListener('click', () => {
  const myform = document.getElementById('myform');

  if (myform.style.display === 'none') 
  {
    myform.style.display = 'block';
  } 
  else
   {
    myform.style.display = 'none';
  }

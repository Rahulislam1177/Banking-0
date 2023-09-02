document.getElementById('submit-button').addEventListener("click",function(){

//Gat email by from user
const userEmailFild = document.getElementById('user-email');
const userEmail =userEmailFild.value;
//console.log(userEmail);

//Gat password by from user
const userPasswordFild = document.getElementById('user-password');
const userPassword =userPasswordFild.value;
//console.log(userPassword);


// Validation chack
if (userEmail == "admin@gmail.com" && userPassword == 123456){
    window.location.href = "banking.html";
}



})


function validateForm() {

  var flag=0;

  let name = document.forms["regForm"]["name"].value;
  if (name.length<3) {
    document.getElementById('errormsg').innerHTML="Name must be atleast 3 chars";
    //alert("Name must be greater than 4 chars");
    flag=1;
  }


    var ck_email = new RegExp ( /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)
    var email = document.forms["regForm"]["email"].value;
    if (!ck_email.test(email)) {
      document.getElementById('errormsg').innerHTML="Invalid Email Address";
        flag=1;
      }

      var pass = document.forms["regForm"]["password"].value;
      var cpass = document.forms["regForm"]["confirmpassword"].value;

      var pword= new RegExp (/^[a-zA-Z0-9]{6,}$/)
   if (!pword.test(pass)) { 
    document.getElementById('errormsg').innerHTML="Invalid Password - \n Password should contain atleast one lower case, atleast 1 upper case, atleast one number and length of password should be atleast 6";
      flag=1;
   }

      if(pass!=cpass){
        document.getElementById('errormsg').innerHTML="Password and confirm password doesn't match";
        flag=1;
      }


      if(flag==1){
        return false;
      }
      else{
      //var x = document.getElementById('errormsg');
      //x.style.color = 'green';
      //document.getElementById('errormsg').innerHTML="Registration Sucessfull !";
      return true;
    }
}
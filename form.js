function clearErrors() {

  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }


}
function seterror(id, error) {
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms['myForm']["fname"].value;
  var letters = /^[A-Za-z]+$/;


  if (name == null || name == "") {
    seterror("name", "*name can't be blank");
    //returnval = true;
  }
  else if (name.length < 5) {
    seterror("name", "*name is too short");
    //returnval = true;
  }
  else if (!letters.test(name)) {
    seterror("name", "*enter valid name");
    //returnval = true;
  }

  var age = document.forms['myForm']["fage"].value;
  var number = /^[1-9]?[0-9]{1}$|^100$/;

  if (age == null || age == "") {
    seterror("age", "*age can't be blank");
  }
  else if (!number.test(age)) {
    seterror("age", "*enter number between 1- 100");
    //returnval = true;
  }
  else if (age >= 18) {
    seterror("age", "  eligible for vote");
  }
  else {
    seterror("age", " not eligible for vote");
  }

  var phone = document.forms['myForm']["fphone"].value;
  var pattern = /^[7-9][0-9]{0,9}$/;

  if (phone == null || phone == "") {
    seterror("phone", "*phone no. can't be blank");
    returnval = true;
  }
  else if (phone.length != 10) {
    seterror("phone", "*Phone number should be of 10 digits!");
    returnval = true;
  }
  else if (!pattern.test(phone)) {
    seterror("phone", "*enter a valid number starting with 7,8,9");
    returnval = true;
  }


  var email = document.forms['myForm']["femail"].value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.length < 5) {
    seterror("email", "*Email length is too short");
    returnval = false;
  }
  else if (!mailformat.test(email)) {
    seterror("email", "*enter a valid mail ");
    returnval = true;
  }


  return true;
}

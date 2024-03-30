let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let emailAddressVar = id('emailId'),
errorVar = classes('error'),
    formVar = id('formId'),
    successVar = classes('success'),
    failureVar = classes('failure'),
    firstNameVar = id('firstname'),
    lastNameVar = id('lastname'),
    mobileNumVar = id('mobileId'),
    passwordVar = id('passwordId'),
    confirmPasswordVar = id('confirmpasswordId'),
    showPwdVar = id('showpwd'),
    hidePwdVar = id('hidepwd'),
    submitBtnVar = id('submitBtn')
    

//Show input error messages
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control error';
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

let inputFields = (id,serial, message) => {
  if (id.value.trim() === "") {
    errorVar[serial].innerHTML = message;
    id.style.border = "2px solid red";
    // icons
    failureVar[serial].style.opacity = "1";
    successVar[serial].style.opacity = "0";
  } else {
    errorVar[serial].innerHTML = "";
    id.style.border = "2px solid green";
    // icons
    failureVar[serial].style.opacity = "0";
    successVar[serial].style.opacity = "1";
  }
};
let pwdCheck = (id1, id2) =>{
  if((id1.value !== id2.value) && (id1 >= 6)){
    errorVar.innerHTML = "password not same"
    id1.style.border = "2px solid red"
    id2.style.border = "2px solid red"
  }
  else{
    id1.style.border = "2px solid green"
    id2.style.border = "2px solid green"
    return true
  }
}
let phoneCheck = (number) =>{
  let message = []
  if((number.value <= 10) && (number.value == [0-9])){
    message.push("please enter valid number")
    number.innerHTML = message
    return false
  }
  else{
    return true
  }
}
// submit buttom 
formVar.addEventListener('submit', (e)=>{
  e.preventDefault();

  inputFields(firstNameVar,0,"name field is required")
  inputFields(mobileNumVar,1,"phone field is required")
  inputFields(emailAddressVar,2,"email field is required")
  inputFields(passwordVar,3,"pwd field is required")
  inputFields(confirmPasswordVar,4,"pwd field is required")
  pwdCheck(passwordVar, confirmPasswordVar);
  phoneCheck(mobileNumVar);
})





// //show success colour
// function showSucces(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// // check passwords match
// function checkPasswordMatch(input1, input2) {
//   if(input1.value !== input2.value) {
//       showError(input2, 'Passwords do not match');
//   }
// }


  // let fname = () =>{
  //   let errorVar = []
  //   if(firstNameVar.value.trim() == null || firstNameVar.value.trim()==='')
  //   {
  //     // errorVar.push('empty value is not required')
  //     alert('field is empty')
  //     // return false
  //   }else{
  //     // return true
  //   }
  // }

  // let password = () => {

  //   if(passwordVar.value == confirmPasswordVar.value)
  //   {
  //     alert('password same');
  //     // return true
  //   }else{
  //     alert('password must be same');
  //     // return true
  //   }
  // }

  // let emailAddress = () => {
  //   let message = []
  //   if (emailAddressVar.value.trim() === '' || emailAddressVar.value.trim()==null){
  //     message.push('the field is empty')
  //     errorEmailVar.innerText = message
  //     message.style.color = red
  //     return false
  //     // alert('field is empty')
  //   }
  // }
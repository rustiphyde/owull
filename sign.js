const btnSignUpCreate = document.getElementById('btnSignUp-create');
const createEmail = document.getElementById('createEmail');
const createPassword = document.getElementById('createPassword');
const confirmPassword = document.getElementById('confirmPassword');

// Add login event




  //Add sign up event
  btnSignUpCreate.addEventListener('click', e => {
    const cemail = createEmail.value;
    const cpass = createPassword.value;
    const confrmPass = confirmPassword.value
    const auth = firebase.auth();
    //sign in
    if(confrmPass === cpass){
    const promise = auth.createUserWithEmailAndPassword(cemail, cpass)
    promise.catch( e =>{
      return document.querySelector('.errormessg').textContent = `Sign Up Unsuccessful.
      Please try again.`,
      console.log(e.message)});}
     else{
      return document.querySelector('.errormessg').textContent = `Passwords don't match.
      Please try again.`,
      console.log(e.message);
     }
  });

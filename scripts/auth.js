import messg from './../store/Error';
/* eslint-disable quote-props */
/* eslint-disable func-names */
// signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const htmlUser = signupForm['signup-username'].value;
    const htmlEmail = signupForm['signup-email'].value;
    const htmlPass = signupForm['signup-password'].value;
    const auth = firebase.auth();

    // sign up the user
    auth.createUserWithEmailAndPassword(htmlEmail, htmlPass)
    // if there is an error stop the process

        .catch(function(error){
            var errorCode = error.code;

            if(errorCode){
                console.log(`${messg.errors[1].text} ${error.message}`);
            }
        })
    // if no errors create the account
        .then(function(){
            const userUid = auth.currentUser.uid;
            const db = firebase.firestore();

            db.collection('users').doc(userUid).set({
                email: htmlEmail,
                emailVerified: false,
                name: htmlUser,
                online: false,
                onlock: false,
                password: htmlPass

            });
            const modal = document.querySelector('#modal-signup');

            M.Modal.getInstance(modal).close();
            signupForm.reset();
        });
});


// auth.onAuthStateChanged(function(user){
//     var firestore = firebase.firestore();
//     var db = firestore.collection('users').doc(user.uid);

//     db.get().then(function(db){
//         promise.catch(function(error){
//             var errorCode = error.code;

//             if(errorCode){
//                 document.querySelector('#errormessg').textContent = `${messg.errors[1].text} ${error.message}`;
//             }
//         });
//         promise.then(function(){
//             console.log(db.name.value);
//         });
//     });
// });

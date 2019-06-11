/* eslint-disable complexity */
import messg from './store/Error';

auth.onAuthStateChanged((user) => {
    if(user && window.location.pathname === '/login'){
        location.href = '/den';
    }
    else if(user){
        console.log('Logged in', user.email);
    }
    else if(!user && window.location.pathname === '/login'){
        document.querySelector('#successmessg').textContent = 'You are currently logged out. Please login below.';
    }
    else if(!user && window.location.pathname === '/register'){
        document.querySelector('#successmessg').textContent = 'To register for a new Owull account please fill out the form below and click Register. If you already have an account please click Login to navigate to the Login page.' ;
    }
    else if(user && window.location.pathname === '/register'){
        location.href = '/den';
    }
    else{
        console.log('Logged out');
    }
}
);

function login(){
    window.addEventListener('DOMContentLoaded', () => {
        const btnLogin = document.getElementById('btnLogin');
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');

        if(btnLogin){
            btnLogin.addEventListener('click', (e) => {
                // get email and password
                const email = txtEmail.value;
                const pass = txtPassword.value;
                const auth = firebase.auth();

                // login event
                auth.signInWithEmailAndPassword(email, pass)
                // eslint-disable-next-line quotes
                    .catch(function handler(error){
                        const errorCode = error.code;

                        if(errorCode){
                            document.querySelector('#errormessg').textContent = `${messg.errors[0].text} ${error.message}`;


                            setTimeout(errFade, 7000);

                            // eslint-disable-next-line no-inner-declarations
                            function errFade(){
                                document.querySelector('#errormessg').textContent = '';
                            }
                        }
                    });
            }
            );
        }
    });
}


function logout(){
    window.addEventListener('load', () => {
        const btnLogout = document.getElementById('btnLogout');


        if(btnLogout){
            btnLogout.addEventListener('click', () => {
                firebase.auth().signOut().then(
                    location.href = '/login'
                );
            });
        }
    }
    );
}

function register(){
    window.addEventListener('DOMContentLoaded', (e) => {
        const btnRegister = document.getElementById('btnRegister');
        const createEmail = document.getElementById('createEmail');
        const createPassword = document.getElementById('createPassword');

        if(btnRegister){
            btnRegister.addEventListener('click', (e) => {
                e.preventDefault();

                // TODO - Create confirm password
                const email = createEmail.value;
                const pass = createPassword.value;
                const auth = firebase.auth();
                // sign in

                auth.createUserWithEmailAndPassword(email, pass)


                    .catch((error) => {
                        const errorCode = error.code;

                        if(errorCode){
                            document.querySelector('#errormessg').textContent = `${messg.errors[1].text} ${error.message}`;


                            setTimeout(errFade, 7000);

                            // eslint-disable-next-line no-inner-declarations
                            function errFade(){
                                document.querySelector('#errormessg').textContent = '';
                            }
                        }
                    }
                    );
            }
            );
        }
    });
}
function reset(){
    window.addEventListener('load', (e) => {
        const btnReset = document.getElementById('btnReset');
        const enterEmail = document.getElementById('enterEmail');

        if(btnReset){
            btnReset.addEventListener('click', (e) => {
                // TODO - Create confirm password
                const email = enterEmail.value;
                const auth = firebase.auth();
                // sign in
                auth.sendPasswordResetEmail(email)
                    .catch((error) => {
                        const errorCode = error.code;

                        if(errorCode){
                            document.querySelector('#errormessg').innerHTML = `${messg.errors[2].text} ${error.message}`;

                            setTimeout(errFade, 7000);

                            // eslint-disable-next-line no-inner-declarations
                            function errFade(){
                                document.querySelector('#errormessg').textContent = '';
                            }
                        }
                    });
            });
        }
    });
}


export { login, logout, register, reset };


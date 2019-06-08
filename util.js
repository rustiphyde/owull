import messg from './store/Error';

function login(){
    window.addEventListener('load', () => {
        const btnLogin = document.getElementById('btnLogin');
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');

        if(btnLogin){
            btnLogin.addEventListener('click', () => {
                // get email and password
                const email = txtEmail.value;
                const pass = txtPassword.value;
                const auth = firebase.auth();
                // login event
                const promise = auth.signInWithEmailAndPassword(email, pass);

                promise.then(() => {
                    location.href = '/den';
                });

                // eslint-disable-next-line quotes
                promise.catch(() => document.querySelector('.errormessg').textContent = `${messg.errors[0].text}`);
            }) ;
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
    window.addEventListener('load', () => {
        const btnRegister = document.getElementById('btnRegister');
        const createEmail = document.getElementById('createEmail');
        const createPassword = document.getElementById('createPassword');

        if(btnRegister){
            btnRegister.addEventListener('click', () => {
                // TODO - Create confirm password
                const email = createEmail.value;
                const pass = createPassword.value;
                const auth = firebase.auth();
                // sign in

                const promise = auth.createUserWithEmailAndPassword(email, pass);

                promise.then(() => document.querySelector(
                    '.successmessg'
                ).textContent = `${messg.successes[2].text}`);

                promise.catch(() => document.querySelector(
                    '.errormessg'
                ).textContent = `${messg.errors[1].text}`
                );
            });
        }
    }
    );
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
                const promise = auth.sendPasswordResetEmail(email);

                promise.then(() => document.querySelector(
                    '.successmessg'
                ).textContent = `${messg.successes[1].text}`);

                promise.catch((e) => document.querySelector('.errormessg').textContent = `${messg.errors[2].text}`);
            });
        }
    });
}

export { login, logout, register, reset };

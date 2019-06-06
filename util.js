const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', (e) => {
    firebase.auth().signOut().then(
        location.href = './index.html'
    );
});

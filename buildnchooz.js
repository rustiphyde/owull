/* eslint-disable quotes */

const okelistForm = document.querySelector('#okelist-form');

okelistForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = okelistForm['create-new-oke-name'].value;
    const fire = firebase.firestore();
    const userUid = firebase.auth().currentUser.uid;

    fire.collection('Users').doc(userUid)
        .collection('Lists').doc(title).set({
            "type": "Oke",
            "phayvd": "false",
            "title": title

        })
        .then(() => {
            const modal2 = document.querySelector('#modal-oke-fill');

            M.Modal.getInstance(modal2).open();


            const modal1 = document.querySelector('#modal-oke-new');

            M.Modal.getInstance(modal1).close();
            okelistForm.reset();
        })
        .catch((error) => {
            const errorCode = error.code;

            if(errorCode){
                console.log(`${error.message}`);
            }
        });
});




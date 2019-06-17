/* eslint-disable quotes */

const okelistForm = document.querySelector('#okelist-form');

okelistForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = okelistForm['create-new-oke-name'].value;
    const fire = firebase.firestore();
    const userUid = firebase.auth().currentUser.uid;

    fire.collection('Users').doc(userUid)
        .collection('Lists').doc(title).set({
            "type": 'Oke',
            "phayvd": false,
            "title": title

        })
        .then(() => {
            const modal2 = document.querySelector('#modal-song');

            M.Modal.getInstance(modal2).open();


            const modal1 = document.querySelector('#modal-oke-new');

            M.Modal.getInstance(modal1).close();
            okelistForm.reset();

            const songForm = document.querySelector('#song-form');

            songForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const songTitle = songForm['song-title'].value;
                const songArtist = songForm['song-artist'].value;

                fire.collection('Users').doc(userUid).collection('Lists').doc(title).collection('Songs').doc(songTitle).set({
                    "song": songTitle,
                    "by": songArtist
                })
                    .then(() => {
                        songForm.reset();

                        const doneBttn = document.querySelector('#done-bttn');

                        doneBttn.addEventListener('click', (e) => {
                            e.preventDefault();

                            M.Modal.getInstance(modal2).close();
                        });
                    }).catch((error) => {
                        const errorCode = error.code;

                        if(errorCode){
                            console.log(`${error.message}`);
                        }
                    });
            });
        })
        .catch((error) => {
            const errorCode = error.code;

            if(errorCode){
                console.log(`${error.message}`);
            }
        });
});



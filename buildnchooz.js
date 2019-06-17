/* eslint-disable quotes */


const okelistForm = document.querySelector('#okelist-form');

okelistForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = okelistForm['create-new-oke-name'].value;

    const okeListDisplay = document.querySelector('#oke-list-display');
    const newDiv = document.createElement('div');

    newDiv.id = title.replace(/\s+/g, '-').replace(/'/g, '').toLowerCase();
    newDiv.className = 'list-disp';
    newDiv.innerHTML = `<h2>${title}</h2><button id="btn-open" class="bttn2">OPEN</button><button id="btn-chooz" class="bttn2">CHOOZ</button>`;

    okeListDisplay.appendChild(newDiv);

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
                        fire.collection('MegaLists').doc('OkeList').collection('Songs').doc(songTitle).set({
                            "song": songTitle,
                            "by": songArtist

                        }).catch((error) => {
                            const errorCode = error.code;

                            if(errorCode){
                                console.log(`${error.message}`);
                            }
                        });

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

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        const fire = firebase.firestore();
        const okeMain = document.querySelector('#oke-main');
        const userUid = firebase.auth().currentUser.uid;

        const db = fire.collection('Users').doc(userUid).collection('Lists').where('type', '==', 'Oke');

        db.get()
            .then((snapshot) => {
                snapshot.docs.map((doc) => {
                    let mainOak = doc.data().title;

                    console.log(mainOak);
                    const newDiv = document.createElement('div');


                    newDiv.innerHTML = `<div id="${mainOak.replace(/\s+/g, '-').replace(/'/g, '').toLowerCase()}" class="list-disp"><h2>${mainOak}</h2><button id="btn-open" class="bttn2">OPEN</button><button id="btn-chooz" class="bttn2">CHOOZ</button></div>`;

                    okeMain.append(newDiv);
                });
            });
    }
});



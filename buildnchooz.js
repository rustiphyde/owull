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
            "title": title,

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

const okeChoozForm = document.querySelector('#oke-chooz-form');

okeChoozForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listcon = okeChoozForm['confirm-list'].value;
    const fire = firebase.firestore();
    const userUid = firebase.auth().currentUser.uid;
    const db = fire.collection('Users').doc(userUid).collection('Lists').doc(listcon).collection('Songs');

    db.get()
        .then((snaps) => {
            let owullList = [];

            snaps.docs.map((doc) => {
                owullList.push(doc.data());
            });

            // get a random index
            const owullIndex = Math.floor(Math.random() * owullList.length);

            const result = document.querySelector('#result-text');

            result.innerHTML =  `Owull thinks you should sing "${owullList[owullIndex].song}" by ${owullList[owullIndex].by}. <span id="well">Owull is wise.</span>`;


            const openModal = document.querySelector('#modal-result');
            const closeModal = document.querySelector('#modal-oke-chooz');

            M.Modal.getInstance(openModal).open();
            M.Modal.getInstance(closeModal).close();

            okeChoozForm.reset();

            const ok = document.querySelector('#ok');

            ok.addEventListener('click', (e) => {
                e.preventDefault();

                M.Modal.getInstance(openModal).close();
            });
        })
        .catch((error) => {
            const errorCode = error.code;

            if(errorCode){
                console.log(`${error.message}`);
            }
        });
});


const megabutton = document.querySelector('#btn-mega-chooz');

const spark = firebase.firestore();
const megadb = spark.collection('MegaLists').doc('OkeList').collection('Songs');

megabutton.addEventListener('click', (e) => {
    e.preventDefault();
    megadb.get()
        .then((snap) => {
            let megalist = [];

            snap.docs.map((doc) => {
                megalist.push(doc.data());
            });

            const megaIndex = Math.floor(Math.random() * megalist.length);

            const megaresult = document.querySelector('#result-text');

            megaresult.innerHTML =  `Owull commends your courage...The song you have to sing is  "${megalist[megaIndex].song}" by ${megalist[megaIndex].by}.<span id="wish"> GOOD LUCK!!</span>`;

            const openModal = document.querySelector('#modal-result');

            M.Modal.getInstance(openModal).open();
            const ok = document.querySelector('#ok');

            ok.addEventListener('click', () => {
                e.preventDefault();

                M.Modal.getInstance(openModal).close();
            });
        })
        .catch((error) => {
            const errorCode = error.code;

            if(errorCode){
                console.log(`${error.message}`);
            }
        });
});

const artistForm = document.querySelector('#artist-chooz-form');

artistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const artcon = artistForm['artist-list'].value;
    const fiery = firebase.firestore();
    const artdb = fiery.collection('MegaLists').doc('OkeList').collection('Songs').where('by', '==', artcon);

    artdb.get()
        .then((snappy) => {
            let artList = [];

            snappy.docs.map((doc) => {
                artList.push(doc.data());
            });

            // get a random index
            const artIndex = Math.floor(Math.random() * artList.length);

            const answer = document.querySelector('#result-text');

            answer.innerHTML =  `Owull thinks you should sing "${artList[artIndex].song}" by ${artList[artIndex].by}. <span id="well">Owull is wise.</span>`;


            const openArt = document.querySelector('#modal-result');
            const closeArt = document.querySelector('#modal-artist-chooz');

            M.Modal.getInstance(openArt).open();
            M.Modal.getInstance(closeArt).close();

            artistForm.reset();

            const yup = document.querySelector('#ok');

            yup.addEventListener('click', (e) => {
                e.preventDefault();

                M.Modal.getInstance(openArt).close();
            });
        })
        .catch((error) => {
            const errorCode = error.code;

            if(errorCode){
                console.log(`${error.message}`);
            }
        });
});



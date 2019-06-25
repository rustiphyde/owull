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


                        })
                            // eslint-disable-next-line func-names
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = document.querySelector('#error-message');
                                const errorForm = document.querySelector('#error-form');
                                const errModa = document.querySelector('#modal-errors');

                                if(errorCode){
                                    errorMessage.innerHTML = `${error.message}`;

                                    M.Modal.getInstance(errModa).open();

                                    errorForm.addEventListener('submit', (e) => {
                                        e.preventDefault();

                                        M.Modal.getInstance(errModa).close();
                                        errorForm.reset();
                                    });
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
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
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
            if(snaps.exists){
                let owullList = [];

                snaps.docs.map((doc) => {
                    owullList.push(doc.data());
                });

                // get a random index
                const owullIndex = Math.floor(Math.random() * owullList.length);

                const result = document.querySelector('#result-text');

                result.innerHTML =  `Owull thinks you should go with "${owullList[owullIndex].song}" by ${owullList[owullIndex].by}. <span id="well">Owull is wise.</span>`;


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
            }
            else{
                const errorMessage = document.querySelector('#error-message');
                const errorForm = document.querySelector('#error-form');
                const errModa = document.querySelector('#modal-errors');

                errorMessage.innerHTML = `I'm sorry but that list doesn't currently exist on your account. You are welcome to create it in the "Build" tab`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
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
            const ok = document.querySelector('#result-form');

            ok.addEventListener('submit', (e) => {
                e.preventDefault();

                M.Modal.getInstance(openModal).close();
                ok.reset();
            });
        })
        // eslint-disable-next-line func-names
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
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
            if(snappy.exists){
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
            }
            else{
                const errorMessage = document.querySelector('#error-message');
                const errorForm = document.querySelector('#error-form');
                const errModa = document.querySelector('#modal-errors');

                errorMessage.innerHTML = `I'm sorry but that artist isn't currently in our database. You are welcome to add them in the 'Build" tab`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        });
});

const okeviewForm = document.querySelector('#okeview-form');

okeviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const viewer = okeviewForm['view-oke-list'].value;
    const flame = firebase.firestore();
    const userUid =  firebase.auth().currentUser.uid;

    const vdb = flame.collection('Users').doc(userUid).collection('Lists').doc(viewer).collection('Songs');


    vdb.get()
        .then((snip) => {

                let viewList = [];

                const viewContent = document.querySelector('#view-content');

                snip.docs.map((doc) => {
                    viewList.push(doc.data());
                });
                console.log(viewList);


                viewContent.innerHTML = viewList.map((cont) => `<li>${cont.song} by ${cont.by}</li><br>`).join(' ');

                const v = document.querySelector('#modal-list-view');
                const m = document.querySelector('#modal-oke-view');

                M.Modal.getInstance(v).open();
                M.Modal.getInstance(m).close();
                okeviewForm.reset();


                const viewForm = document.querySelector('#view-list-form');

                viewForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(v).close();
                    viewForm.reset();
                });
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `I'm sorry but that list doesn't currently exist on your account. You are welcome to create it in the "Build" tab}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        });
});
const oketrashForm = document.querySelector('#oketrash-form');

oketrashForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const trashList = oketrashForm['trash-oke-name'].value;
    const trashSong = oketrashForm['trash-oke-song'].value;
    const userUid = firebase.auth().currentUser.uid;
    const fuego = firebase.firestore();
    const tdb = fuego.collection('Users').doc(userUid).collection('Lists').doc(trashList).collection('Songs').doc(trashSong);

    tdb.delete()
        .then(() => {
            const moda = document.querySelector('#modal-oke-trash');

            M.Modal.getInstance(moda).close();
            oketrashForm.reset();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        });
});



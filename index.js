/* eslint-disable func-names */
import Nav from './components/Nav';
import Content from './components/Content';


import * as states from './store';

import Navigo from 'navigo';

import { capitalize } from 'lodash';

// window,location.origin provides the base location
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');
// In each of these we are invoking our fxns and the return is our HTML

// render receives an argument as a named parameter: "state"
function render(state){
    root.innerHTML = `
    ${Nav(state)}
    ${Content(state)}`;


    router.updatePageLinks();
}
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log(response.data)
//     });


function handleRoutes(params){
    render(states[capitalize(params.path)]);
}

router
    .on(':path', handleRoutes)
    .on('/', () => render(states.Oke))
    .resolve();


document.addEventListener('DOMContentLoaded', function(){
    const modals = document.querySelectorAll('.modal');

    M.Modal.init(modals);
});



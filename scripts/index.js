// import Navigation from './components/Navigation';
import Content from './../components/Content';
// import Footer from './components/Footer';

import * as states from './../store';

import Navigo from 'navigo';

import { capitalize } from 'lodash';

// window,location.origin provides the base location
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');
// In each of these we are invoking our fxns and the return is our HTML

// render receives an argument as a named parameter: "state"
function render(state){
    root.innerHTML = `
    ${Content(state)}`;
    // const links = document.querySelectorAll('nav a');

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
    .on('/', () => render(states.Login))
    .resolve();

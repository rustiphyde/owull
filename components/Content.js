import * as pages from './pages';

export default (state) => `
${pages[state.pageContent](state)}
`;

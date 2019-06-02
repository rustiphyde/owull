import * as pages from './pages';

export default (state) => `
<body class="container">
${pages[state.pageContent](state)}
</body>

`;

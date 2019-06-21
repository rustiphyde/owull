export default {
    'primary': [
        { 'text': ' DEN', 'icon': 'fas fa-list-ul' }, { 'text': ' OKE', 'icon': 'fas fa-music' }, { 'text': ' BOOZ', 'icon': 'fas fa-glass-whiskey' }, { 'text': ' BARZ', 'icon': 'fas fa-store-alt' }
    ],
    'auth': [
        { 'text': 'LOGIN', 'icon': 'fas fa-lock-open', 'target': 'modal-login', 'status': 'logged-out' }, { 'text': 'SIGNUP', 'icon': 'fas fa-user-plus', 'target': 'modal-signup', 'status': 'logged-out' }, { 'text': 'FORGOT', 'icon': 'fas fa-key','target': 'modal-forgot', 'status': 'logged-out' }, { 'text': 'LOGOUT', 'icon': 'fas fa-lock', 'status': 'logged-in' }

    ],
    'oke': [
        { 'text': 'BUILD', 'icon': 'fas fa-hammer', 'target': 'modal-oke-new', 'status': 'logged-in' }, { 'text': 'EDIT', 'icon': 'fas fa-pencil-alt', 'target': 'modal-oke-edit', 'status': 'logged-in' }, { 'text': 'VIEW', 'icon': 'fas fa-eye', 'target': 'modal-oke-view', 'status': 'logged-in' }
    ]
};

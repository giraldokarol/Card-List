import './styles/base.less';
import './components/App/App.js'; // Call to App Root view

document.addEventListener('DOMContentLoaded', () => {
    const app = document.createElement('app-root');
    document.body.appendChild(app);
})
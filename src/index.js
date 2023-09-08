import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Router>
    <App />
  </Router>
);

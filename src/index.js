import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './i18n';

  ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={(<div className='index__loading'><h2>Loading...</h2></div>)}>
          <App />
      </Suspense>,
    </React.StrictMode>,
    document.getElementById('root')
  );




import React, {Suspense} from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Suspense fallback={(<div className='index__loading'><h2>Loading...</h2></div>)}>
          <App />
      </Suspense>,
    </React.StrictMode>,
  );




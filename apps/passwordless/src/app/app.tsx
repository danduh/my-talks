// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Login from './login/login';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Register from './register/register';

export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* END: routes */}
      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>

        </ul>
      </div> */}

    </div>

  );
}

export default App;

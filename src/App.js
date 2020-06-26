import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { Footer } from './components/Footer/Footer';

import styles from'./App.module.scss';
import Login from './containers/Login/Login';
import UserInfoShort from './containers/UserInfoShort/UserInfoShort';
import Albums from './containers/Albums/Albums';
import Photos from './containers/Photos/Photos';
import PhotosSlider from './containers/PhotosSlider/PhotosSlider';
import TODOsSlider from './containers/TODOsSlider/TODOsSlider';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/"]}>
          <Login />
        </Route>
        <Route exact path={["/main"]}>
          <UserInfoShort />
          <Albums />
          <Photos />
          <PhotosSlider />
          <TODOsSlider />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

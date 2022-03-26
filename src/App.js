import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import HomeLight from './components/pages light/Light Home';
import AboutLight from './components/pages light/Light About';
import ExperienceLight from './components/pages light/Light Experience';
import EducationLight from './components/pages light/Light Education';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/experience' component={Experience} />
          <Route path='/education' component={Education} />
          <Route path='/light-mode' exact component={HomeLight} />
          <Route path='/about-light-mode' component={AboutLight} />
          <Route path='/experience-light-mode' component={ExperienceLight} />
          <Route path='/education-light-mode' component={EducationLight} />
          {/* <Route path='/light-mode' component={LightMode} /> */}
        </Switch>
      </Router>
  );
}

export default App;

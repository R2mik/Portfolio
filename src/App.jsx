import { NameAndJob } from './components/NameAndJob';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

import './assets/App.scss';

const App = () => {
  return (
    <div className="App">
      <NameAndJob/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

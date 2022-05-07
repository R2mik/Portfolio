import { NameAndJob } from './components/NameAndJob';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';

import './assets/App.scss';
const App = () => {
  return (
    <div className="App">
      <NameAndJob/>
      <AboutMe/>
      <Projects/>
      <NameAndJob/>
      <NameAndJob/>
      <NameAndJob/>
      <NameAndJob/>
      <NameAndJob/>
      <NameAndJob/>

    </div>
  );
}

export default App;

import '../styles/App.css';
import Header from './Header';
import About from './About';
import Experince from './Experience';
import Footer from './Footer';
import Skills from './Skills';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experince />
      <Footer />
    </div>
  );
};

export default App;
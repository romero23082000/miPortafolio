import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import Proyects from './components/productList/proyects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;

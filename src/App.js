
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './components/Hero';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <AboutUs></AboutUs>      
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;

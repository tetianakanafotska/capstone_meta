import './App.scss';
import Header from './Header';
import Banner from './Banner';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Highlights/>
        <Testimonials/>
        <About/>
      </main>
      <Footer/>
    </>
  );
}

export default App;

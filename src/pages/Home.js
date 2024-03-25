import Header from '../components/Header';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Chefs from '../components/Chefs';
import Footer from '../components/Footer';

const Home = () => (
    <>
        <Header/>
        <main>
            <Banner/>
            <Highlights/>
            <Testimonials/>
            <Chefs/>
        </main>
        <Footer/>
     </>

)

export default Home;
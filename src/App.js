import './css/style.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import Produk from './components/produk';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <section>
      {/* header section */}
      
        <Header/>
        
      {/* end of header section */}

      {/* content section */}
      
          
          <Home/>
          <About/>
          <Menu/>
          <Produk/>
          <Contact/>
          <Footer/>

      {/* end of content section */}
    </section>
  );
}

export default App;

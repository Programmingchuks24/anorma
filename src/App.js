import './App.css';
import Discount from './Discount';
import Footer from './Footer';
import Header from './Header';
import Product from './Product';

function App() {
  return (
    <div className="w-[50vh] h-[90vh] bg-white relative left-5 top-5 rounded-lg">
      
      <Header/>

      <Discount/>

      <Product/>

      <Footer/>
    </div>
  );
}

export default App;

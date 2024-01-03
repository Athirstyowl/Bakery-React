import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutSection from './Components/AboutSection';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import RegiForm from './Components/RegiForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={[<Carousel/>,
        <AboutSection/>]} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/menu" element={<Menu />} ></Route>
          <Route path='/workwithus' element={<RegiForm/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

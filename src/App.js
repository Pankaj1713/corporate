// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Banner from './Components/Banner';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
// import LatestBlogs from './Components/LatestBlogs';
import Login from './Components/Login';
// import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <Login/>
     {/* <Header/>
     <Banner/>
     <Testimonial/>
     <Routes>
        <Route path="/Login" element={<Login />}/>  
     </Routes>
     <LatestBlogs/>
     <Footer/> */}
    </div>
    
  );
}

export default App;

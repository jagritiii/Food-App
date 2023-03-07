import './App.css';
import Header from './componants/header'
import AboutUs from './componants/AboutUs/aboutUs.componant';
import Footer from './componants/Footer/footer.componant'
import LoginPage from './componants/Auth/auth.componant';
import { Route, Routes} from 'react-router-dom';
import Home from './componants/Home/home.componant';
import Restaurant from './componants/restaurant';

function App() {

  // const loginHandler =()=>{
  //   alert()
  // }

  return (
    <div className="App container-fluid">
      <Header />
      <Routes> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/restaurant/:id' element={<Restaurant/>}></Route>
      <Route path='/about_us' element={<AboutUs/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

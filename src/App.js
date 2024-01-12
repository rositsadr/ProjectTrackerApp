import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Statistics from './components/pages/Statistics';
import AboutApp from './components/pages/AboutApp';
import ContactUs from './components/pages/ContactUs';
import Main from './components/pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='statistics' element={<Statistics/>}></Route>
        <Route path='about' element={<AboutApp/>}></Route>
        <Route path='contactUs' element={<ContactUs/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

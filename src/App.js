import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import StatisticsPage from './components/pages/StatisticsPage';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}>
        <Route path='' element={<HomePage/>}></Route>
        <Route path='statistics' element={<StatisticsPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import arian from './img/ArianNajafi.png'
import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';
import ContacMePage from './pages/ContactMePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/contact-me' element={<ContacMePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

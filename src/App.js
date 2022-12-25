import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import ReviewPage from './components/ReviewPage/ReviewPage';
import Blog from './components/Blog/Blog';
import About from './components/About/About'
import NotFound from './components/NotFOund/NotFound';

function App() {
  return (
    <>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/reviews" element={<ReviewPage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </div>


    </>
  );
}

export default App;

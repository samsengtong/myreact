import logo from './logo.svg';
import './css/App.css';
import Navbar from './Navbar/Navbar';
import './css/index.css'
import Moviecard from './components/MovieCard';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';

import Favorite from './pages/Favorite';
import { MovieProvider } from './contexts/MovieContext';

function App() {
 // const movieNumber = 1;
  return (

    <MovieProvider>
      <Navbar></Navbar>
         <main className='main-content'>
      <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/favorite' element={<Favorite></Favorite>}></Route>
      </Routes>
    
    </main>
  
  </MovieProvider>
   
  )
    
    

}


export default App;

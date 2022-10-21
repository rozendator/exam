import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BootstrapNavBar from './pages/Component/BootstrapNavbar'
import SearchLyrics from './pages/SearchLyrics';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    
<BrowserRouter>
<BootstrapNavBar/>
<Routes>
  <Route  path='/' element={<HomePage/>}/>
   <Route  path='/search' element={<SearchLyrics/>}/>

   </Routes>
</BrowserRouter>
  )
}

export default App;

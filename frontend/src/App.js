import './App.css';
import NavBar from './components/NavBar';
import Home from './screen/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="container-fluide ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;

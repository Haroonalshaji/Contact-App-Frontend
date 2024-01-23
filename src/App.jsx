import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import View from './Components/View';
import Edit from './Components/Edit';
import Add from './Components/Add';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </section>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;

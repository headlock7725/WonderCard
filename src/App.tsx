// components
//pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Game from './pages/Game'; // Import the Play component

function App() {
  return (
    <Router>
      <div className="App flex flex-col h-screen">
        <Header />
        <main className="flex-grow h-full">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/play" element={<Game />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App

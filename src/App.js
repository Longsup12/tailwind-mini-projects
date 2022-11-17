import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className='font-sora text-13 h-screen px-4 py-8 bg-zinc-700'>
      <Navbar />
      <Card />
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/NavBar/Navbar';
import Pricing from './components/Pricing Grids/Pricing';

function App() {
  return (
    <div>
      <div className='font-sora text-13 px-4 py-8 bg-zinc-700'>
      <Navbar />
      <Card />
    </div>
    <div className='px-4 py-8 bg-slate-800'>
    <Pricing />
    </div>
  </div>
  );
}

export default App;

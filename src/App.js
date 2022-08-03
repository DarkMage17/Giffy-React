import { Link, Route } from 'wouter';
import './App.css';
import GifList from './components/GifList';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/penguin'>Gifs de pinguinos</Link>
        <Link to='/gif/tiger'>Gifs de tigres</Link>
        <Route path='/gif/:keyword' component={GifList}/>
      </section>
    </div>
  );
}

export default App;

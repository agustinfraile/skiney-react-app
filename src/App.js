import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {'Productos destacados'}/>
      <ItemCount init={1} stock={5} />
      <ItemCount init={1} stock={3} />
      <ItemCount init={1} stock={7} />
    </div>
  );
}

export default App;

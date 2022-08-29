import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { List } from './Komponen/List';
import { Navbarnya } from './Komponen/Navbarnya/Navbarnya';


function App() {
  return (
    <div className="App">
      <Navbarnya/>
     
     <List/>
    </div>
  );
}

export default App;

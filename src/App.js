import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import List from './components/List/List'

import './App.css';

function App() {

  return (
    <div className="app">
      <Header />
      <Filters />
      <List />
    </div>
  );
}

export default App;

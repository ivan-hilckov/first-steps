import Header from 'components/Header/Header'
import Filters from 'components/Filters/Filters'
import List from 'components/List/List'

import data from './data.json'

import './App.css';

function App() {
  console.log('data >>>', data)

  return (
    <div className="app">
      <Header />
      <Filters />
      <List />
    </div>
  );
}

export default App;

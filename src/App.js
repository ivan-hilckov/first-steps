import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import List from './components/List/List'

import data from 'data.json'

import './App.css';
import { useState } from 'react';

function App() {
  console.log('data >>>', data)

  const [categoryList, setCategoryList] = useState([{
    id: "all",
    name: "All",
    type: "all",
  }, ...data.categoryList])

  const [productList, setProductList] = useState(data.productList)
  const [currentCategory, setCurrentCategory] = useState(categoryList[0].type)
  const [isLimited, setIsLimited] = useState(false)
  const [isNem, setIsNem] = useState(false)

  console.log('categoryList >>>', categoryList)
  console.log('productList >>>', productList)
  console.log('category >>>', currentCategory)
  console.log('isLimited >>>', isLimited)
  console.log('isNem >>>', isNem)

  const onCurrentCategoryChange = (value) => {
    console.log('onCurrentCategoryChange: value >>', value)
    setCurrentCategory(value)

    const nextItems = data.productList.filter(item => {
      return value === 'all' || item.categoryType === value
    })

    setProductList(nextItems)
  }

  const onIsLimitedChange = () => {
    setIsLimited(!isLimited)
  }

  return (
    <div className="app">
      <Header />
      <Filters
        items={categoryList}
        current={currentCategory}
        onCurrentChange={onCurrentCategoryChange}
        onIsLimitedChange={onIsLimitedChange}
        isLimited={isLimited}
        isNem={isNem}
      />
      <List items={productList} />
    </div>
  );
}

export default App;

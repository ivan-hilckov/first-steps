import qs from 'query-string'
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import List from './components/List/List'

import data from 'data.json'

import './App.css';
import { useState } from 'react';

const filter = (list = [], category =  'all', isLimited = false, isNew = false, search = '4021') => {
  const next = list
    .filter(item => isNew ? item.isNew: true )
    .filter(item => isLimited ? item.isLimited : true )
    .filter(item => category === 'all' || item.categoryType === category)
    // .filter(item => item.name.includes(search) || item.description.includes(search))

  return next
}

function App() {
  console.log('data >>>', data)

  const query = qs.parse(window.location.search)

  const [categoryList, setCategoryList] = useState([{
    id: "all",
    name: "All",
    type: "all",
  }, ...data.categoryList])

  const [currentCategory, setCurrentCategory] = useState(() => {
    return query?.category ? query?.category : 'all'
  })
  const [isLimited, setIsLimited] = useState(() => Boolean(query?.isLimited))
  const [isNew, setIsNew] = useState(() => Boolean(query?.isNew))

  const [productList, setProductList] = useState(data.productList)

  // const [search, setSearch] = useState('')

console.log('isNew', isNew)

//?key=value&key=value
  const onCurrentCategoryChange = (value) => {
    const nextCategory = value
    const nextProductList = filter(data.productList, value, isLimited, isNew)

    setCurrentCategory(nextCategory)
    setProductList(nextProductList)
  }

  const onIsLimitedChange = () => {
    const nextIsLimited = !isLimited
    const nextProductList = filter(data.productList, currentCategory, nextIsLimited, isNew)

    setIsLimited(nextIsLimited)
    setProductList(nextProductList)
  }

  const onIsNewChange = () => {
    const nextIsNew = !isNew
    const nextProductList = filter(data.productList, currentCategory, isLimited,  nextIsNew)

    setIsNew(nextIsNew)
    setProductList(nextProductList)
    window.history.pushState({}, '', `/?isNew=${nextIsNew}`)
  }

  return (
    <div className="app">
      <Header onS />
      <Filters
        items={categoryList}
        current={currentCategory}
        onCurrentChange={onCurrentCategoryChange}
        onIsLimitedChange={onIsLimitedChange}
        onIsNewChange={onIsNewChange}
        isLimited={isLimited}
        isNew={isNew}
      />
      <List items={productList} />
    </div>
  );
}

export default App;

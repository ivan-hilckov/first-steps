import qs from 'query-string'
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import List from './components/List/List'

import data from 'data.json'

import './App.css';
import { useState } from 'react';

const filter = (list = [], category =  'all', isLimited = false, isNew = false, search = '') => {
  const next = list
    .filter(item => isNew ? item.isNew: true )
    .filter(item => isLimited ? item.isLimited : true )
    .filter(item => category === 'all' || item.categoryType === category)
    .filter(item => search ? 
      item.name.toLowerCase().includes(search.toLowerCase()) 
      || item.description.toLowerCase().includes(search.toLowerCase()) 
      || item.categoryType.toLowerCase().includes(search.toLowerCase())
      : true
      )

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

  const [search, setSearch] = useState('')




//?key=value&key=value
  const onCurrentCategoryChange = (value) => {
    const nextCategory = value
    const nextProductList = filter(data.productList, value, isLimited, isNew, search)

    setCurrentCategory(nextCategory)
    setProductList(nextProductList)
    window.history.pushState(
      {}, '', `/?category=${nextCategory}
      & isLimited=${isLimited}
      & isNew=${isNew}
      & search=${search}`
      )
  }

  const onIsLimitedChange = () => {
    const nextIsLimited = !isLimited
    const nextProductList = filter(data.productList, currentCategory, nextIsLimited, isNew, search)

    setIsLimited(nextIsLimited)
    setProductList(nextProductList)
    window.history.pushState(
      {}, '', `/?category=${currentCategory}
      & isLimited=${nextIsLimited}
      & isNew=${isNew}
      & search=${search}`
      )
  }

  const onIsNewChange = () => {
    const nextIsNew = !isNew
    const nextProductList = filter(data.productList, currentCategory, isLimited,  nextIsNew, search)

    setIsNew(nextIsNew)
    setProductList(nextProductList)
    window.history.pushState(
      {}, '', `/?category=${currentCategory}
      & isLimited=${isLimited}
      & isNew=${nextIsNew}
      & search=${search}`
      )
  }

  const searchChange = (search) => {
    const isSearching = search
    const nextProductList = filter(data.productList, currentCategory, isLimited, isNew, isSearching)
  
    setSearch(isSearching)
    setProductList(nextProductList)
    console.log('searching!!!',  isSearching)

    window.history.pushState(
      {}, '', `/?category=${currentCategory}
      & isLimited=${isLimited}
      & isNew=${isNew}
      & search=${isSearching}`
      )
  }


  return (
    <div className="app">
      <Header 
        searchChange={searchChange}
        search={search}
      />
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

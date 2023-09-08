import './Filters.css';
import data from 'data.json'

function Button({ children }) {
  return <button className='filter__button'>{children}</button>
}

function Filters() {
  console.log('data >>>', data)
  return (
    <div className="filters">
      <div className='block__filters'>
        <div className='filters__top'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="#fff" d="M0 0h24v24H0z" />
            <path fill="#037BFF" d="M17 21h2v-6h-2v6ZM5 21h2V11H5v10Zm16-10h-2V3h-2v8h-2v2h6v-2ZM9 17h2v4h2v-4h2v-2H9v2Zm4-14h-2v10h2V3ZM9 9V7H7V3H5v4H3v2h6Z" />
          </svg>
          <p className='filters__title'>Filters</p>
        </div>
        <div className='filters__bottom'>
          <div className="filters__category">
            <div className='filters__section'>category</div>
            <div className='filters__buttons'>
              <Button>All</Button>
              {data.categoryList.map((item) => {
                return <Button key={item.id}>{item.name}</Button>
              })}
            </div>
          </div>
          <div className='filters__status'>
            <div className='filters__section'>status</div>
            <div className='filters__checkBox'>
              <label className='label__checkbox'>
                <input className='checkbox__input' id="limited" type="checkbox" name="status" value="Limited"></input>
                Limited
              </label>
              <label className='label__checkbox'>
              <input className='checkbox__input' type="checkbox" id="Choice2" name="status" value="New"></input>
                New
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Filters

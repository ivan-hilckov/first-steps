import './Filters.css';

function Filters({ items, current, onCurrentChange, isLimited, onIsLimitedChange, isNew, onIsNewChange }) {
  console.log('items, current >?>>', items, current)

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
              {items.map((item) => {
                console.log('item', item, item.type === current)
                return (
                  <button
                    key={item.id}
                    className={`filter__button ${item.type === current ? 'filter__button_active' : ''}`}
                    onClick={() => onCurrentChange(item.type)}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='filters__status'>
            <div className='filters__section'>status</div>
            <div className='filters__checkBox'>
              <label className='label__checkbox'>
                <input
                  className='checkbox__input'
                  id="limited"
                  type="checkbox"
                  name="status"
                  value={isLimited}
                  onChange={e => {
                    console.log('e!!!!!!!', e.target.value)
                    onIsLimitedChange(!e.target.value)
                  }}
                />
                Limited
              </label>
              <label className='label__checkbox'>
                <input 
                  className='checkbox__input' 
                  id="new"
                  type="checkbox" 
                  name="status" 
                  value={isNew} 
                  onChange={e => {
                    console.log('e!!!!!!!!!', e.target.value)
                    onIsNewChange(!e.target.value)
                  }}
                />
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

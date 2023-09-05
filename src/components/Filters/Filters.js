import './Filters.css';


function Filters() {
  return (
    <div className="filters">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@300&display=swap');
      </style>
      <div className='block__filters'>
        <div className='filters__top'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="white"/>
            <path d="M17 21L19 21L19 15L17 15L17 21ZM5 21L7 21L7 11L5 11L5 21ZM21 11L19 11L19 3L17 3L17 11L15 11L15 13L21 13L21 11ZM9 17L11 17L11 21L13 21L13 17L15 17L15 15L9 15L9 17ZM13 3L11 3L11 13L13 13L13 3ZM9 9L9 7L7 7L7 3L5 3L5 7L3 7L3 9L9 9Z" fill="#037BFF"/>
          </svg>
          <p className='filters__title'>Filters</p>
        </div>
        <div className='filters__bottom'>
          <div class="filters__category">
            <div className='filters__section'>category</div>
            <div className='filters__buttons'>
              <button className='filter_button'>All</button>
              <button className='filter_button'>Canola</button>
              <button className='filter_button'>Corn</button>
              <button className='filter_button'>Oats</button>
              <button className='filter_button'>Wheat</button>
              <button className='filter_button'>Soybeans</button>
              <button className='filter_button'>Barley</button>
              
            </div>
          </div>
          <div className='filters__status'>
            <div className='filters__section'>status</div>
            <div className='filters__checkBox'>
              <input type="checkbox" id="Choice1" name="status" value="Limited"></input>
              <label>Limited</label>
              <input type="checkbox" id="Choice2" name="status" value="New"></input>
              <label>New</label>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Filters
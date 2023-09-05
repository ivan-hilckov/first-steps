import './List.css';

import canola from "./images/canola.png";
import corn from "./images/corn.png";
import oats from "./images/oats.png";
import wheat from "./images/wheat.png";
import soybeans from "./images/soybeans.png";
import barley from "./images/barley.png";

import data from 'data.json'

const typeToSrc = {
  wheat: wheat,
  soybeans: soybeans,
  oats: oats,
  corn: corn,
  canola: canola,
  barley: barley,
}

function List() {

  console.log('data >>>', data)

  return (
    <div className="list">
      <div className="list__container">
        {data.productList.map(item => {
          return (
            <div className="list__product" key={item.id}>
              <div className='list__product__image'>
                <img src={typeToSrc[item.categoryType]} alt="canola" />
              </div>
              <div className="list__product__text">
                <div className='list__product__top'>
                  <div className='first__line'>
                    <div className='list__product__category'>{item.categoryName}</div>
                    <div className='first__line__category'>
                      <div className='limited'>Limited</div>
                      <div className='new'>New</div>
                    </div>
                  </div>
                  <div className='list__product__title'>CS2300</div>
                  <div className='list__product__description'>
                    Roundup Ready® Canola Hybrid
                  </div>
                </div>
                <div className='list__product__bottom'>
                  <div className='list__product__price'>$34.00</div>
                  <div className='list__product__discount'>Discount $2 per bag</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List

import './Item.css';

import canola from "./images/canola.png";
import corn from "./images/corn.png";
import oats from "./images/oats.png";
import wheat from "./images/wheat.png";
import soybeans from "./images/soybeans.png";
import barley from "./images/barley.png";

import { format } from '@astopo/price-formatter';

const typeToSrc = {
  wheat: wheat,
  soybeans: soybeans,
  oats: oats,
  corn: corn,
  canola: canola,
  barley: barley,
}

function Item({ item }) {

  console.log('item >>>', item)

  return (
    <div className="list__product" key={item.id}>
      <div  className='list__product__card'>
        <img className="list__product__image"src={typeToSrc[item.categoryType]} alt="canola" />
      </div>
      <div className="list__product__text">
        <div className='list__product__top'>
          <div className='first__line'>
            <div className='list__product__category'>{item.categoryName}</div>
            <div className='first__line__category'>
              {item.isLimited ? <div className='limited'>Limited</div> : null}
              {item.isNew ? <div className='new'>New</div> : null}
            </div>
          </div>
          <div className='list__product__title'>{item.name}</div>
          <div className='list__product__description'>{item.description}</div>
        </div>
        <div className='list__product__bottom'>
          <div className='list__product__price'>{format(item.price)}</div> 
          {item.discount ? <div className='list__product__discount'>Discount {format(item.discount)} per bag</div> : null}
        </div>
      </div>
    </div>
  )
}

export default Item

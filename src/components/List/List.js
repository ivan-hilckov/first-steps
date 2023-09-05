import './List.css';
import canola from "./images/canola.png";
import corn from "./images/corn.png";
import oats from "./images/oats.png";
import wheat from "./images/wheat.png";

function List() {
  return (
    <div className="list">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@300&display=swap');
      </style>
      <div class="list__container">

        <div class="list__product">
          <div>
            <img className="list__product__image" src={canola} alt="canola" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='first__line'>
                <div className='list__product__category'>Canola</div>
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
        <div class="list__product">
          <div>
            <img className="list__product__image" src={wheat} alt="wheat" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='list__product__category'>Wheat</div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$18.00</div>
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>
            <img className="list__product__image" src={corn} alt="corn" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
            <div className='first__line'>
                <div className='list__product__category'>Corn</div>
                <div className='first__line__category'>
                  <div className='new'>New</div>
                </div>
              </div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$21.50</div>
              
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>
            <img className="list__product__image" src={corn} alt="corn" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='first__line'>
                <div className='list__product__category'>Corn</div>
                <div className='first__line__category'>
                  <div className='limited'>Limited</div>
                </div>
              </div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$10.00</div>
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>
            <img className="list__product__image" src={oats} alt="oats" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='list__product__category'>Oats</div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$10.00</div>
              <div className='list__product__discount'>Discount $1.25 per bag</div>
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>
            <img className="list__product__image" src={canola} alt="canola" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='list__product__category'>Canola</div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$10.00</div>
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>
            <img className="list__product__image" src={wheat} alt="wheat" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='list__product__category'>Wheat</div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$10.00</div>
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>
            <img className="list__product__image" src={canola} alt="canola" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='first__line'>
                <div className='list__product__category'>Canola</div>
                <div className='first__line__category'>
                  <div className='new'>New</div>
                </div>
              </div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Really long description that totally not gonna fit in one line
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$10.00</div>
              <div className='list__product__discount'>Discount $0.65 per bag</div>
            </div>
          </div>
        </div>
        <div class="list__product">
          <div>  
            <img className="list__product__image" src={oats} alt="oats" />;
          </div>
          <div className="list__product__text">
            <div className='list__product__top'>
              <div className='list__product__category'>Oats</div>
              <div className='list__product__title'>CS2300</div>
              <div className='list__product__description'>
                Roundup Ready® Canola Hybrid
              </div>
            </div>
            <div className='list__product__bottom'>
              <div className='list__product__price'>$10.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
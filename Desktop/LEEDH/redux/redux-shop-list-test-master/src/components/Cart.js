import { BsTrash,BsCart2 } from "react-icons/bs";
import './Cart.css';
import productList from '../productList.json';

function Cart(){
  return(
    <div id="cart">
      <h3>장바구니</h3>
      <div className="box">
        {
          productList.products.map(item => {
          return(
            <figure key = {item.id}>
              <img src={item.imageUrl} alt={item.name}/>
              <figcaption>
                <dl>
                  <dt>{item.name}</dt>
                  <dd>{item.detail}</dd>
                  <dd>
                    <button type="button">
                      <BsTrash />
                    </button>
                  </dd>
                </dl>
              </figcaption>
            </figure>
          )})
        }
      </div>
      <footer>
        <p><button type="button">장바구니 비우기</button></p>
        <div>
          <BsCart2 />
          <p>장바구니에 담은 상품이 없습니다.</p>
        </div>
      </footer>
    </div>
  )
}

export default Cart;
import { BsFillSuitHeartFill,BsSuitHeart } from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux";
import productList from '../productList.json';
import './Home.css';
import { addToCart,removeFromCart } from "../redux/cartSlice";

function Home(){
  let {productId} = useSelector(state => state.cart);
  console.log(productId);
  let dispatch = useDispatch();
  return(
    <div id="home">     
      {productList.products.map(item => {
        return(
          <figure key ={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <figcaption>
              <dl>
                <dt>{item.name}</dt>
                <dd>${item.price}</dd>
                <dd>
                  {
                    !productId.includes(item.id) &&
                    <button 
                    type="button"
                    onClick={()=>dispatch(addToCart(item.id))}>
                      <BsSuitHeart />
                    </button>
                  }
                  {
                    productId.includes(item.id) &&
                    <button 
                    type="button"
                    onClick={()=>dispatch(removeFromCart(item.id))}>
                      <BsFillSuitHeartFill />                      
                    </button>
                  }
                </dd>
              </dl>
            </figcaption>
          </figure>
        )})
      }
    </div>
  )
}

export default Home;
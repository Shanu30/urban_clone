import React from 'react';
import {useEffect, useState} from 'react'
import styles from './cart.module.css'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
export default function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cart`)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleDel =( ) => {

  }



  return (
    <div className={styles.cart}>

{/* cart_navbar */}

      <nav className={styles.cartnav}>
        <div className={styles.lnav}>
          <div className={styles.hoverColorChange}>
              <HelpOutlineOutlinedIcon />
              <span>Help</span>
          </div>
              
        </div>
        <div className={styles.urbanLogo}></div>
        <div className={styles.rnav}>
          <div className={styles.hoverColorChange}>
            <HttpsOutlinedIcon />
            <span>Secure Payment</span>
          </div>
          <div>
            <button className={styles.navbtn}>Track Order</button>
            <button className={styles.navbtn}>Login</button>
            <button className={styles.navbtn}>Signup</button>
            
          </div>
        </div>
      </nav>

{/* stepper */}

      <stepper className="stepper"></stepper>

{/* offer details */}

      <div className={styles.offer}>
      <ul>
          <li>No Cost EMIs on Credit Cards!</li>
          <li>Purchase a mattress along with bed & get extra 10%OFF upto Rs.1000. Use code: HAPPYSLEEP</li>
          <li>Due to high demand, our deals may change anytime during sale. Grab all you want before it's gone!</li>
        </ul>
      </div>

{/* cart list */}


      <div className={styles.heading}>
        <div className={styles.cartprod}>PRODUCTS</div>
        <div className={styles.headdata}>DELIVERY DATE</div>
        <div className={styles.headdata}>QUANTITY</div>
        <div className={styles.headdata}>TOTAL</div>
      </div>
      <div >
        <div>
          {cartItems.map((data) => {
              return (
                <div key={data.id} className={styles.heading}>
                  <div className={styles.cartprod}>
                    <div className={styles.imageDiv}>
                      <img src={data.image} alt="" />
                    </div>
                    <div  className={styles.detailsDiv}>
                      <div>{data.name}</div>
                      <div>{data.color}</div>
                    </div>
                  </div>
                  <div className={styles.cartdata}>
                    {data.date}
                  </div>
                  <div className={styles.cartdata}>
                    <select>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <div className={styles.cartdata}>
                    {data.price}
                    <div className={styles.delbtn}>
                      <button onClick={handleDel}>X</button>
                    </div>
                  </div>
              </div>
                  
              )
            
            })}
          </div>
      </div>

{/* billing amount */}

      
     
    </div>
  );
}
import React, { Component } from 'react';
import '../../css/shop.scss';
import product1 from '../../img/product1.jpg';
import product2 from '../../img/product2.jpg';
import product3 from '../../img/product3.jpg';
import { Link } from 'react-router-dom';

class ShopPage extends Component {
    render() {
        return (
            <div className="shop">
                <div className="shop__container">
                    {/* <h3 className="titles-pages">Products</h3> */}
                    <ul className="grid">
                        <li>
                            <Link to='/shop/shopping'>
                                <img src={product1} alt="" />
                                <span className="title-product">Model one</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop/shopping'>
                                <img src={product2} alt="" />
                                <span className="title-product">Model two</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop/shopping'>
                                <img src={product3} alt="" />
                                <span className="title-product">Model three</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShopPage;




// Sopping<Sopping info={productInfo}/>
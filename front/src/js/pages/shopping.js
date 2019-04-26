import React, { Component } from 'react';
class ShoppingPage extends Component {
    constructor() {
        super();

        this.state = {
            products:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(response => {
            this.setState({
                products: response.products,
                // maceta1: response.products[0],

            })
        })
    }

    render() {
        return (
            <div>
                <div>SHOPPING</div>
                {this.state.products.map(product => {
                    return(
                        <p>{product.name}</p>
                    )
                })}
            </div>
        );
    }
}

export default ShoppingPage;
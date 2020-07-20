import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const data = this.props;
        return (
            <div className="col-lg-3 col-sm-6 mix all dresses bags">
                <div className="single-product-item">
                    <figure>
                        <a href="#"><img  width="10px;" height="150px" src="Image/ao.jpg" alt="" /></a>
                        <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                        <h6> {data.name}</h6>
                        <p>$22.90</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
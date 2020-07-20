import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";
import '../root/styte/Header.css'

class Home extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

                <body>
                    <center>
                        <section className="latest-products spad">
                            <div className="container">
                                <div className="product-filter">
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <div className="section-title">
                                                <h4>Latest Products</h4>
                                            </div>
                                            <ul className="product-controls">
                                                <li data-filter="*">All</li>
                                                <li data-filter=".dresses">Dresses</li>
                                                <li data-filter=".bags">Bags</li>
                                                <li data-filter=".shoes">Shoes</li>
                                                <li data-filter=".accesories">Accesories</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row" id="product-list">
                                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                    <div className="single-product-item">
                                        <figure>
                                            <a href="#"><img  width="10px;" height="150px" src="Image/ao.jpg" alt="" /></a>
                                            <div className="p-status">new</div>
                                        </figure>
                                        <div className="product-text">
                                            <h6>Green Dress with details</h6>
                                            <p>$22.90</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                    <div className="single-product-item">
                                        <figure>
                                            <a href="#"><img  width="10px;" height="150px" src="Image/ao.jpg" alt="" /></a>
                                            <div className="p-status">new</div>
                                        </figure>
                                        <div className="product-text">
                                            <h6>Green Dress with details</h6>
                                            <p>$22.90</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                    <div className="single-product-item">
                                        <figure>
                                            <a href="#"><img  width="10px;" height="150px" src="Image/ao.jpg" alt="" /></a>
                                            <div className="p-status">new</div>
                                        </figure>
                                        <div className="product-text">
                                            <h6>Green Dress with details</h6>
                                            <p>$22.90</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                    <div className="single-product-item">
                                        <figure>
                                            <a href="#"><img  width="10px;" height="150px" src="Image/ao.jpg" alt="" /></a>
                                            <div className="p-status">new</div>
                                        </figure>
                                        <div className="product-text">
                                            <h6>Green Dress with details</h6>
                                            <p>$22.90</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </section></center>
                </body>

            </div>
        );
    }
}

export default Home;
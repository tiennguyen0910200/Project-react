import React, { Component } from 'react';
//import CurrencyFormat from 'react-currency-format';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";
import '../root/styte/Header.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/category")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result
                    });
                })

    }
    render() {
        
        console.log(this.state.data);
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="slide">
                    <img width="85%" height="550px" src="Image/slide.jpg" alt="" ></img>
                </div><br />
                <body>

                    <center>
                        <section className="latest-products spad">
                            <div className="container">
                                <div className="product-filter">
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <div className="section-title">
                                                <h3>Wellcome!</h3>
                                            </div><br />
                                            <ul className="product-controls">
                                                <li >All</li>
                                                <li >New</li>
                                                <li >Hot</li>
                                                <li >Luxury</li>
                                                <li >Seductive</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {this.state.data.map((category) => (
                                <div>
                                  
                                    <h4 className="name"><i>{category.name}</i></h4>
                                    <br /><br /><br />
                                    <div className="product">
                                        {category.product.map((product) => (
                                            <div>
                                            <div className="border">
                                                <a href="#"><img className="img" src={"http://127.0.0.1:8000" + product.image} alt="" /></a><br/><br/>
                                                <h6>{product.name}</h6><br/>

                                                <div className="price">
                                                {/* <strike><CurrencyFormat className="oldprice" thousandSeparator={true} value={product.oldPrice}/></strike> */}
                                                <strike><p className="oldprice">{product.oldPrice}</p></strike>
                                                    <p className="price">{product.price}đ</p>
                                                {/* <CurrencyFormat className="newprice" thousandSeparator={true} value={product.price} /> */}
                                                </div>
                                                <div >
                                                <span class="fa fa-star checked"></span>&ensp;
                                                <span class="fa fa-star checked"></span>&ensp;
                                                <span class="fa fa-star checked"></span>&ensp;
                                                <span class="fa fa-star"></span>&ensp;
                                                <span class="fa fa-star"></span>
                                                </div><br/>

                                                
                                                
                                                <button className="btdetail">
                                                <Link to={'/detail/'+product.id} className="detail">Detail</Link>
                                                </button>
                                                    
                                            

                                            </div>
                                            </div>

                                        ))}
                                       
                                        <br />
                                    </div>

                                </div>
                            ))}
                        </section></center>
                </body>
                <div className="tron">
                    <img className="den1" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den2" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den3" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den4" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den5" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den6" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den5" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den4" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den3" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den2" src="Image/den.jpg" alt="" ></img>&ensp;
                    <img className="den1" src="Image/den.jpg" alt="" ></img>
                </div>
                <br/>
                <div>
                    <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.499245003467!2d108.10346611480738!3d16.039562388899242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421f6ae29c8b3f%3A0x9e0d602a6827ba6d!2zQsOqIFRodWkgVHLhu4tuaA!5e0!3m2!1svi!2s!4v1597472064280!5m2!1svi!2s" 
                    width="80%" height="450"  
                    allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe></center>
                        </div>
                        <hr/>
               
               <div className="foot">
                   <div className="line">
                       <h4 className="h4">CONNECT</h4>
                       <h5><i>Tien Tien Shop</i></h5><br/>
                       <h6>Address1:Be Thui Trinh-Da Nang</h6>
                       <h6>Address2:101B Le Huu Trac- Da Nang</h6>
                       <h6>Email:nguyenthitien2262gmail.com</h6>
                       <h6>Phone:0776650195</h6>
                       <h6>Time:From 6AM to 10PM</h6>
                       <h6>See you again soon</h6>
                   </div>
                   <div className="line">
                       <h4 className="h4">PRODUCT</h4><br/>
                       <h6>Men Fashion</h6>
                       <h6>Women Fashion</h6>
                       <h6>Luxury Fashion</h6>
                       <h5><i>International Products 100%</i> </h5>
                   </div>
                   <div className="line">
                       <h4 className="h4">FACEBOOK</h4><br/>
                       <img src="Image/tien2.jpg" alt="" ></img>
                       <h6>Nguyễn Thị Tiên</h6>

                   </div>
               </div>
               <div className="copyright">
                   <h3>Copyright by Nguyen Thi Tien 2020</h3>
               </div>

         

            </div>
        );
    }
}

export default Home;
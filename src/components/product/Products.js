import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {

    constructor(){
        super();
        this.state = {
            posts: []
        }
        this.getData();
    }

    getData(){
        localStorage.removeItem('posts');
        fetch("http://127.0.0.1:8000/api/product")
        .then(response => {
                response.json().then((data) =>  {
                    console.log(data);
                this.updateUI(data);
            });
        });
        }

    updateUI(data){
        this.setState({
            posts:data
        })
    }

    show(){
        const { posts } = this.state;
        var list = posts.map((item,index)=>
            <ProductItem item = {item} key = {index}/>

        )
        return list;

    }
    render() {
        return (
            <div>
                {this.show()}
            </div>
        );
    }
}

export default Products;
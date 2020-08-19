import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../page/detail.css'
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      cart:[],
    }
    let id = this.props.match.params.id;
    let user_id=localStorage.getItem("idp");
    this.getDataCart(user_id);
    this.getData(id);
    this.updateUI = this.updateUI.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  getDataCart(user_id){
    fetch("http://127.0.0.1:8000/api/cart",{
      headers:{
        'Content-Type': 'application/json',
        'Authorization':user_id,
      }
    })
    .then(response => {
      response.json().then((data) => {
          this.updateUICart(data);
      });
  });
  }
  updateUICart(data){
    this.setState({
      cart:data.cart,
    })
  }
  getData(id) {
    fetch("http://127.0.0.1:8000/api/detail/" +id)
 
                  .then(response => {
                return response.json();
            }).then((data) => {
                console.log(data);
                this.updateUI(data);
            }
            );
      
  }
  updateUI(data) {
    this.setState({
      post: data
    })
  }
  onAddToCart(item){
    return(event)=>{
      let user_id=localStorage.getItem("idp");
      fetch("http://127.0.0.1:8000/api/addtocart/"+item, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          'Authorization': user_id,
        },
        body: item
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200){
          alert("Sucessful");
        }
        else{
            alert("Failed");
        }

      });
    }
  }
  render() {
    
    return (
      <div >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <center><div>
            {this.state.post.map((item) =>
            <div className="flex">
            <div>
                <img src={'http://127.0.0.1:8000' + item.image} alt="" className="picture"  />
            </div>
            <div>
                <h2 className="name">{item.name}</h2><br/>
                <strike><p>{item.oldPrice}d</p></strike>
                <p>{item.price}d</p><br/>
                <p>{item.description}</p> 
                <div >
                <span class="fa fa-star checked"></span>&ensp;
                <span class="fa fa-star checked"></span>&ensp;
                <span class="fa fa-star checked"></span>&ensp;
                <span class="fa fa-star"></span>&ensp;
                <span class="fa fa-star"></span>
                </div>               
                <br/>
                <button type="submit"  onClick={this.onAddToCart(item.id)}>Book</button>
            </div>
           </div>
           )}
        </div></center>
      </div>
      
    )
  }

}
export default withRouter(Detail);

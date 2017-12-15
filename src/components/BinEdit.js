import React, { Component } from 'react';
import './App.css'; //Simulation-1 37E-1

class BinEdit extends Component {
    constructor(props){ //Simulation-1 36I
        super()
        this.state = { //Simulation-1 36C
            id = this.props.id,//Simulation-1 36E
            name: '', 
            price: 0,
            tempEdit: true, 
            edit: 'Edit'
            // save: 'Save'
            // tempDelete: false,
            // tempSave: false
        }
        this.deleteBin = this.deleteBin.bind(this)
    }

    componentDidMount(){ //Simulation-1 44E 39C
      //Simulation-1 44C 44D 37D
        axios.get(`http://localhost:3000/api/bin/${this.state.id}`).then(resp=>{
          this.setState({
            name: resp.data.product.name,
            price: resp.data.product.price,
          })
        }).catch(error=>console.log(error))
      }

      deleteBin(){ //Simulation-1 36J
        axios.delete(`http://localhost:3000/api/shelf/${thi.state.id}`).then(resp=>{
          this.setState({ //render nothing
            name: '',
            price: 0,})
        }).catch(error=>console.log(error))
      }

  render() {//Simulation-1 36F
    return (
      <div className="Bin"> {/*Simulation-1 54G below*/}
          <h6>Name:</h6>
          <Input value={this.state.name} onChange={event=>{this.setState({name: event.target.value})}}/>
          <h6>Price:</h6>
          <Input value={this.state.price} onChange={event=>{this.setState({price: parseInt(event.target.value,10)})}}/> 

          <button id="Action-button" onClick={event=>{
                this.setState({tempEdit: !tempEdit})
                axios.put(`http://localhost:3000/api/shelf/${this.state.id}`,{name: this.state.name, price: this.state.price}).then(resp=>{
                  this.setState({
                    name: resp.data.product.name,
                    price: resp.data.product.price})
                }).catch(error=>console.log(error))}}>{tempEdit? this.setState({edit: 'Edit'}):  this.setState({edit: 'Save'})/*Simulation-1 36G*/} </button>
          <button id="Action-button" onClick={event=>{
                deleteBin(event);
                location.href = "./shelfpageNew";}}>Edit</button>>Delete</button>
      </div>
    );
  }
}

export default BinEdit; //Simulation-1 37E-2

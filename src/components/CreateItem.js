import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../services/APICalls';
import RestroFooter from './RestroFooter';

class CreateItem extends Component {
  constructor(props) {
    super(props)

    this.state = {

      itemName: "",
      itemCategory: "",
      price: 0,
      imageFile:{}
    }
  }

  imageFileChange(e) {
    e.preventDefault();
    this.setState({
      imageFile: e.target.value
    });
  }
  itemNameChange(e) {
    e.preventDefault();
    this.setState({
      itemName: e.target.value
    });
  }
  itemCategoryChange(e) {
    e.preventDefault();
    this.setState({
      itemCategory: e.target.value
    });
  }
  priceChange(e) {
    e.preventDefault();
    this.setState({
      price: e.target.value
    });
  }


  submitForm(e) {
    e.preventDefault();
    let hospitalObject = {



      itemName: this.state.itemName,
      itemCategory: this.state.itemCategory,
      price: this.state.price,
      imageFile:this.state.imageFile
    }
    console.log('====================================');
    console.log(hospitalObject);
    console.log('====================================');
    APICalls.createItem(hospitalObject).then(


    )
    window.location = '/adminDashboard'


  }
  render() {


    return (
      <div>

        <br></br>
        <div className="container">
          <div className="row">
            <h4 className='text-center text-white'>Create Item</h4><br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3">

              <div className="card-body">
                <form >

                  <div className="form-group">
                    <label> Item Name: </label>
                    <input placeholder="Name" name="itemName" className="form-control" value={this.state.itemName} onChange={this.itemNameChange.bind(this)} />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Category: </label>
                    <select placeholder="Category" name="itemCategory" className="form-control" value={this.state.itemCategory} onChange={this.itemCategoryChange.bind(this)} >
                      <option  >select</option>
                      <option value="Veg" >Veg</option>
                      <option value="Non-Veg">Non-Veg</option>
                      <option value="cold-drinks">cold-drinks</option>

                    </select>

                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Price: </label>
                    <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.priceChange.bind(this)} />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Add Image: </label>
                    <input type="file" placeholder="Attach File" name="image" className="form-control" value={this.state.imageFile} onChange={this.imageFileChange.bind(this)} />
                  </div>
                  <br></br>





                  <button className="btn btn-outline-primary" style={{ marginLeft: "100px" }} onClick={this.submitForm.bind(this)}>Save</button>

                </form>
                <Link to='/adminDashboard'>Back</Link>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div >
        <RestroFooter />
      </div >
    )
  }
}

export default CreateItem
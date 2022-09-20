// import React, { Component } from 'react';
// import APICalls from '../services/APICalls';
// import MyNavigation from './MyNavigation';
// import ShowTable from './ShowTable';


// class OrderDetailsCoomponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//             itemName: "",
//             itemQuantity: "",
//             items: [],
//             orderDetails: [],
//             flag: false,
//             vegItems: [],
//             nonVegItems: [],
//             drinkItems: []


//         }
        
//     }

//     componentDidMount() {
//         APICalls.getAllVegItems().then(
//             (resp) => {
//                 this.setState({
//                     vegItems: resp.data
//                 })
//             }
//         )

//         APICalls.getAllNonVegItems().then(
//             (resp) => {
//                 this.setState({
//                     nonVegItems: resp.data
//                 })
//             }
//         )
//         APICalls.getAllIColdDrinktems().then(
//             (resp) => {
//                 this.setState({
//                     drinkItems: resp.data
//                 })
//             }
//         )

//     }

//     handleVegItemName(e) {
//         this.setState({
//             itemName: e.target.value
//         })
//         console.log(e.target.value + " " + this.state.itemName);
//     }
//     changeVegItemQuantity(e) {
//         this.setState({
//             itemQuantity: e.target.value
//         })
//     }
   

//     }
//     // goToMenuPage(e) {
//     //     e.preventDefault();

//     //     let details = {
//     //         vegItem: this.state.vegItemName,
//     //         vegItemQ: this.state.vegItemQuantity,
//     //         nonVegItem: this.state.nonVegItemName,
//     //         nonVegItemQ: this.state.nonVegItemQuantity
//     //     }

//     //     // console.log(e.target.value);
//     //     // alert(details.vegItem);


//     //     // window.location.href = "/menu";
//     // }






//     addItem(e) {
//         e.preventDefault();
//         const newVegItem = this.state.itemName;
//         const newVegItemQ = this.state.itemQuantity;
        



//         const obj = {
//             "userID":1,
//             'vegItemName': newVegItem,
            
//         };

//         APICalls.cre
//         const newArray = this.state.items.slice(); // Create a copy
//         newArray.push(obj); // Push the object
//         this.setState({
//             items: newArray
//         });
//         console.log(this.state.items);

//         this.state.itemQuantity = '';
//         this.state.nonVegItemQuantity = '';
//         this.state.drinkItemQuantity = '';
//     }

//     showTable() {
//         this.setState({
//             flag: true
//         })
//     }
//     render() {
//         return (
//             <div className='card'>
//                 {/* nav bar  start*/}
//                 <MyNavigation></MyNavigation>
//                 {/* nav bar end */}



//                 <h2>OrderDetailsCoomponent</h2>



//                 <br></br><br></br><br></br>

//                 <div className="row">
//                     <div className="col-sm-2">.col-sm-4</div>
//                     <div className="col-sm-8">
//                         FORM HERE
//                         <br></br>
//                         {this.state.flag == true ? <ShowTable formData={this.state.items} /> : ''}

//                         <br></br>




//                         <form>
//                             <table className="table table-bordered ">
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">No</th>
//                                         <th scope="col">name</th>
//                                         <th scope="col">Quantity</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {/* <tr>
//                                         <td>Veg</td>
//                                         <td><select name="vegItemName" value={this.state.itemName} onChange={this.handleVegItemName.bind(this)}>
//                                             {this.state.vegItems.map((color, i) => <option key={i} value={color.itemName}>{color.itemName}</option>)}</select> </td>
//                                         <td><input name="vegItemQuantity" type="text" value={this.state.itemQuantity} onChange={this.changeVegItemQuantity.bind(this)} /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Non Veg</td>
//                                         <td><select name="nonVegItemName" value={this.state.nonVegItemName} onChange={this.changeNonVegItemName.bind(this)}>
//                                             {this.state.nonVegItems.map((color, i) => <option key={i} value={color.itemName}>{color.itemName}</option>)}</select> </td>
//                                         <td><input name="nonVegItemQuantity" type="text" value={this.state.nonVegItemQuantity} onChange={this.changeNonVegItemQuantity.bind(this)} /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Cold Drink</td>
//                                         <td><select name="drinkItemName" value={this.state.drinkItemName} onChange={this.handleDrinkItemName.bind(this)}>
//                                             {this.state.drinkItems.map((color, i) => <option key={i} value={color.itemName}>{color.itemName}</option>)}</select> </td>
//                                         <td><input name="drinkItemQuantity" type="text" value={this.state.drinkItemQuantity} onChange={this.handleDrinkItemQuantity.bind(this)} /></td>
//                                     </tr>


//                                     <tr><td></td><td></td><td><button className="btn btn-primary" onClick={this.addItem.bind(this)}>Order Now</button></td></tr>
//                                     <tr><td></td><td></td><td><button className="btn btn-primary" onClick={this.showTable.bind(this)}>Show table Now</button></td></tr>
//                                 </tbody></table></form> */}
//                     </div>
//                     <div className="col-sm-2">.col-sm-4</div>
//                 </div>
//                 <br></br><br></br><br></br>

//             </div>

//         )
//     }
// }

// export default OrderDetailsCoomponent
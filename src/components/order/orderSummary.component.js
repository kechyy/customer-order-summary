import React from 'react';
import axios from "axios";

const OrderSummary = () => {
    let total = 0;
    let tax = 0;
    let totalBill = 0;
    let totalItem = 0;

    const [orders, setOrder] = React.useState({
        restaurant: {},
        items: [],
        user: {}
    })
    const getOrderSummary = async() => {
        try {
            const req = await axios.get('https://indapi.kumba.io/webdev/assignment');
            console.log(req.data.restaurant)
            setOrder({
                restaurant: req.data.restaurant,
                items: req.data.items,
                user: req.data.user
            })

        }catch(error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        return getOrderSummary();
    }, [])
    return (
        <>

            <div className="profile-page">
                <h5 className="profile-title">Order Summary</h5>
               <div className="container table-responsive">
                   <div className="row">
                       <h4><span className="fa fa-user"></span> Customer Details</h4>
                       <table className="table">
                           <thead>
                           <tr>
                               <th>Name</th>
                               <th>Address</th>
                               <th>Phone</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td>{orders.user.name}</td>
                               <td>{orders.user.address}</td>
                               <td>{orders.user.phone}</td>
                           </tr>
                           </tbody>
                       </table>

                   </div>
                   <div className="row">
                       <h4><span className="fa fa-hotel"></span> Restaurant Details</h4>
                       <table className="table">
                           <thead>
                           <tr>
                               <th>Name</th>
                               <th>Street</th>
                               <th>City</th>
                               <th>State</th>
                               <th>Zip-Code</th>
                           </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <td>{orders.restaurant.name}</td>
                                   <td>{orders.restaurant.street}</td>
                                   <td>{orders.restaurant.city}</td>
                                   <td>{orders.restaurant.state}</td>
                                   <td>{orders.restaurant.zipcode}</td>
                               </tr>
                           </tbody>
                       </table>

                   </div>
                   <div className="row">
                       <h4><span className="fa fa-list"></span> Order Items</h4>
                       <table className="table table-condensed">
                           <thead className="bg-light">
                           <tr>
                               <th>Name</th>
                               <th>Category</th>
                               <th>Price</th>
                               <th>Currency</th>
                               <th>Tax_pct</th>
                               <th>Quantity</th>
                           </tr>
                           </thead>
                           <tbody>
                           { orders.items.map((item, index) => {
                               totalItem = item.quantity + totalItem;
                               total = item.price * item.quantity + total
                               tax = item.tax_pct/100 * total;
                               totalBill = total + tax;
                               return (
                                   <tr key={index}>
                                       <td>{item.name}</td>
                                       <td>{item.category}</td>
                                       <td>{item.price}</td>
                                       <td>{item.currency}</td>
                                       <td>{item.tax_pct}</td>
                                       <td>{item.quantity}</td>
                                   </tr>
                               )
                           })}
                           </tbody>
                       </table>
                    <div  className="bg-warning" style={{padding:'20px', borderRadius: '5px', marginLeft: 'auto'}}>
                        <h5> <strong>Order Summary</strong></h5>
                        <ul>
                            <li><strong>TotalBill:</strong> {totalBill}</li>
                            <li><strong>Tax:</strong> {tax }</li>
                            <li><strong>TotalItem:</strong> {totalItem}</li>
                        </ul>
                    </div>
                   </div>

               </div>
            </div>
        </>
    )
}

export default OrderSummary;
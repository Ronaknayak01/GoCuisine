import React, { useContext, useEffect } from 'react'
import "./Myorders.css"
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Myorder = () => {

    const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);

    const fetchOrders=async ()=>{
        const response=await axios.post("https://gocuisine4.onrender.com/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
    <h2>My Orders</h2>
    <div className='container'>
        {data.map((order,index)=>{
            return (
                <div key={index} className='my-orders-order'>
                <img srf={assets.parcel_icon} alt='' />
                <p>{order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                        return item.name+" x "+"item.quantity"
                    }else{
                        return item.name+" x "+"item.quantity"+", ";
                    }
                })}</p>
                <P>{order.amount}.00</P>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                <button>Track Order</button>
                </div>
        )
        })}
    </div>
    </div>
  )
}

export default Myorder

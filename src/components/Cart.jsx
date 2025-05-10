import React, { useEffect, useState } from 'react'
import Payment from './Payment';

const Cart = () => {

    const [item,setItem] = useState('');
    const [price,setPrice] = useState('');
    const [list,setList] = useState([]);
    const [totalprice,setTotalPrice] = useState(0);
    const [next,setNext] = useState(false);
    const [editId , setEditId] = useState(null);

    const handleItem = (e) => {
        setItem(e.target.value);
    }
    const handlePrice = (e) => {
        let Price = e.target.value;
        if(isNaN(Price)) {
            return;
        }
        else {
            setPrice(Price);
        }
    }

    const addList = () => {
        if (item !== "" && price > 0) {
            if (editId !== null) {
                const updatedList = list.map((i) =>
                    i.id === editId ? { ...i, item, price: Number(price) } : i
                );
                setList(updatedList);
                setEditId(null); 
            } else {
                setList([...list, { id: Date.now(), item, price: Number(price) }]);
            }
            setItem('');
            setPrice('');
        }
    };
    

    const handleDelete = (id) => {
        let newList = list.filter(item => {
            return item.id !== id;
        });
        setList(newList);
    }

    useEffect(() => {
            let total = list.reduce((sum,curr) => sum + curr.price, 0);
            setTotalPrice(total);
    },[list]);

    const payment = () => {
        setNext(true);
    }

    if(next) {
        return <Payment total={totalprice} />
    }

  return (
    <div>
        <div className='grid grid-cols-2 gap-3 my-4'>
        <input type='text' placeholder='Enter item' onChange={handleItem} value={item} className='bg-white p-2 rounded-sm outline-0 text-black' />
        <input type='text' placeholder='Price' onChange={handlePrice} value={price} className='bg-white p-2 rounded-sm outline-0 text-black'/>
        <button className=' p-2 font-bold bg-purple-700 col-span-2 rounded-md cursor-pointer hover:bg-purple-500'
        onClick={addList}>Add to Cart</button>
    </div>

    <h2 className='text-2xl font-medium'>Cart Items</h2>
    <div className='my-5'>
    {
    list.map(item => {
        return <div key={item.id} className='flex border border-purple-600 p-2 rounded-md justify-between items-center mb-3'>
            <p className='text-[1.2rem] capitalize'>{item.item} - ₹{item.price}</p>
            <div>
                <button onClick={() => {
                    setEditId(item.id);
                    setItem(item.item);
                    setPrice(item.price);
                }} className='bg-green-600 rounded-sm p-1 cursor-pointer mr-4'>✏️</button>
                
                <button onClick={() => handleDelete(item.id)} className='bg-red-600 rounded-sm 
                p-1 cursor-pointer'>🗑️</button>
            </div>
        </div>
    })
    }
    </div>
    {
    list.length === 0 ? null : <div className='flex mt-5 justify-between items-center'>
    <p className='text-[18px]'>Total Payment : ₹{totalprice}</p>
    <button className='p-2 font-bold bg-purple-600 rounded-md cursor-pointer 1hover:bg-purple-500' onClick={payment}>Go to Payment</button>
    </div>
    }
    </div>
  )
}

export default Cart
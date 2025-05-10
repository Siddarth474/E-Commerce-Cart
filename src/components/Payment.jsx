import {React , useState} from 'react';

const Payment = ({ total }) => {

    const [selectedMethod, setSelectedMethod] = useState('');

    const methods = [
        { label: 'Credit Card', value: 'card', image : '💳' },
        { label: 'UPI', value: 'upi', image : '🪙' },
        { label: 'Net Banking', value: 'netbanking', image :'🏦' },
        { label: 'Cash on Delivery', value: 'cod', image : '💵'},
    ]

    const handleCheckboxClick = (value) => {
        if(selectedMethod === value) {
            setSelectedMethod('');
        }
        else {
            setSelectedMethod(value);
        }
    }

    const showMessage = () => {
        if(selectedMethod !== '') {
            alert('Your Order has been Placed !!');
            setSelectedMethod('');
        }
    }

    return (
      <div>
        <h1 className='text-center text-3xl font-bold'>Payment</h1>
        <div className='mt-6'>
          {
          methods.map((method,index) => (
            <div key={index} className='flex justify-between border border-purple-600 p-2 rounded-sm mb-3'>
              <p className='w-[15px] text-[20px] flex-1'><span className='mr-1'>{method.image}</span>{method.label}</p>
              <input
                type='checkbox' className='w-5 mr-4 cursor-pointer' 
                checked={selectedMethod === method.value}
                onChange={() => handleCheckboxClick(method.value)}
              />
            </div>
          ))
          } 
        </div>
        <div className='flex justify-between mt-7 items-center'>
          <p className='text-[18px]'><strong>Total Payment :</strong> ₹{total} </p>
          <button onClick={showMessage} className='bg-purple-700 px-2 py-1 rounded-sm cursor-pointer 
          hover:bg-purple-500'>Place Order</button>
        </div>
      </div>
    );
  };

export default Payment;
  
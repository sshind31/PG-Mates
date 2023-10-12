import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function PaymentForm(item) {
  console.log(item)
  const [cardno, setcardno] = useState()
  const [nameoncard, setnameoncard] = useState()
  const [amount, setamount] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      amount === undefined ||
      cardno == undefined ||
      nameoncard === undefined
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please provide all information',
      })
      return
    }
    if (amount < 100) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Amount must be greater than 100',
      })
      return
    }
    if (amount > item?.id?.rent + item?.id?.lightbill) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Amount must be less than the total',
      })
      return
    }
    const data = {
      apid: item?.id?.id,
      userid: sessionStorage.getItem('id'),
      cardno: cardno,
      nameoncard: nameoncard,
      amount: amount,
    }

    axios
      .post('http://localhost:8080/api/bookings', data)
      .then((resp) => {
        Swal.fire({ title: resp.data })
        navigate('/')
      })
      .catch((error) => {
        Swal.fire({ title: error.response.data })
      })
  }

  return (
    <>
      <h5>Payment Details</h5>
      <form>
        <div>
          <div className='mb-3 row'>
            <label className='col-sm-4 col-form-label'>Card No</label>
            <div className='col-sm-8'>
              <input
                type='text'
                onChange={(e) => setcardno(e.target.value)}
                maxLength={16}
                minLength={16}
                className='form-control'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-4 col-form-label'>Name on Card</label>
            <div className='col-sm-8'>
              <input
                type='text'
                onChange={(e) => setnameoncard(e.target.value)}
                className='form-control'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-4 col-form-label'>Rent</label>
            <div className='col-sm-8'>
              <input
                type='number'
                value={item?.id?.rent}
                disabled
                className='form-control'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-4 col-form-label'>Electricity Bill</label>
            <div className='col-sm-8'>
              <input
                type='number'
                value={item?.id?.lightbill}
                disabled
                className='form-control'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-4 col-form-label'>Booking Amount</label>
            <div className='col-sm-8'>
              <input
                type='number'
                onChange={(e) => setamount(e.target.value)}
                className='form-control'
              />
            </div>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary float-end'>
            Pay Now
          </button>
        </div>
      </form>
    </>
  )
}

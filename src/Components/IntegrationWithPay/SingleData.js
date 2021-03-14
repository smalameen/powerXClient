import React from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';

const SingleData = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  function refreshPage() {
    window.location.reload(false);
  }
  const history = useHistory();

  const goToPayment = ()=> {
    const url = `/payment`
    history.push(url);
    onSubmit()
    alert("Sure")
}
const onSubmit = (phoneData) => {
  fetch(`http://localhost:5001/phones`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(phoneData),
  })
    .then((res) => res.json())
    .then((success) => {
      console.log(success)
    })
}
  return (
    <div className="container mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label  for="phone"><h3>Your Phone number</h3></label> <br/>
          <input 
            style={{
              height: '3rem',
              width: '80%',
              borderRadius: '5px',
              border: '1px solid gray',
              color: '#09015f',
              fontStyle: 'bold',
            }}
            name="phone"
                ref={register}
                placeholder="Please input your phone number"
                required
                
                type= "number"
        /> <br/> <br/>
          <input onClick={refreshPage}
          style={{
            height: '2rem',
            width: '6rem',
            borderRadius: '10px',
            border: '1px solid #FF4B2B',
            backgroundColor: '#FF4B2B',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 80ms ease-in',
          }} type= "submit"/>
        </form>
  </div>
  )
}

export default SingleData

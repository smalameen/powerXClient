import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import { DatePicker } from 'react-nice-dates'

const ShowCards = ({ clients, detailsData }) => {
  let payment = useHistory()
  const goToPayment = () => {
    payment.push('/payment')
  }

  const [date, setDate] = useState()
  

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { register, handleSubmit, watch, errors } = useForm()



  // Fetching Data
  const onSubmit = (data) => {
    fetch(`http://localhost:5001/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        alert('Are you sure to send data')
        goToPayment()
        // console.log(success)
      })
  }
  const { id } = useParams()
  // console.log(id)
  return (
    <div className="d-flex justify-content-center col-md-6">
      <Card
        style={{
          width: '20rem',
          margin: '1rem',
          boxShadow: '5px 5px 5px 2px #888888',
        }}
      >
        <Card.Body>
          <Card.Title>{clients.day}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{clients.time}</Card.Text>
          <Button onClick={handleShow}>Book</Button>
        </Card.Body>
      </Card>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          open={handleShow}
          animation={false}
          className="text-center"
        >
          <h1>Admission Form</h1>
          <Modal.Body style={{ borderRadius: '2rem', marginTop: '1rem' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label for="trainingSegment">Your trining segment</label>

              <input
                name="trainingSegment"
                ref={register}
                value={detailsData.name1}
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
              ></input>
              <br /> <br />
              <label for="timeSlot">
               Time slot you have chosen
              </label>{' '}
              <input
                value={clients.time}
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
                ref={register}
                name="timeSlot"
              ></input>{' '}
              <br /> <br />
              <label for="price">Amount to be paid per month</label>
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
                value={detailsData.price}
                ref={register}
                name="price"
              ></input>{' '}
              <br /> <br /> <br />
              <p>
                <b>Personal Information</b>{' '}
              </p>
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
                name="name"
                ref={register}
                placeholder="Full name"
                required
              />
              <br /> <br />
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="Address"
                ref={register}
                placeholder="Your address"
                required
              />
              <br /> <br />
              
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  
                  format="dd/MM/yyyy"
                >
                  {({ inputProps, focused }) => (
                    <input style={{
                      height: '3rem',
                      width: '80%',
                      borderRadius: '5px',
                      border: '1px solid gray',
                    
                    }}
                      className={'input' + (focused ? ' -focused' : '')}
                     
                      {...inputProps}
                      placeholder="Date of Birth"
                    />
                  )}
                </DatePicker> <br />
             
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="phoneNumber"
                required
                ref={register}
                placeholder="Enter a valid phone number"
              />
              <br /> <br />
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="age"
                ref={register}
                required
                placeholder="Enter your age"
              />
               
              <br /> <br />
              <select
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="category"
                ref={register}
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>{' '}
              <br /> <br />
              <input
                style={{
                  height: '3rem',
                  width: '8rem',
                  borderRadius: '20px',
                  border: '1px solid #FF4B2B',
                  backgroundColor: '#FF4B2B',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'transform 80ms ease-in',
                }}
                type="submit"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default ShowCards

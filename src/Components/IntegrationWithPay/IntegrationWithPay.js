import React, { useEffect, useState } from 'react'
import Header from '../Home/Headers/Header'
import header from '../../Components/Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import Footer from '../Home/Footer/Footer'
import axios from 'axios'
import ShowPayManetAndData from './ShowPayManetAndData'
import { Button, Form } from 'react-bootstrap'
import SingleData from './SingleData'
import { useForm } from 'react-hook-form'
import ShowFetchedData from './ShowFetchedData'
import PaymentProcess from './PaymentProcess'

const IntegrationWithPay = () => {
  const [data, setData] = useState([{ hits: [] }])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5001/order')
      setData(result.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(${header})`,
        }}
        class="background"
      >
        <Header />
        <div
          style={{ color: 'white', overflowX: 'hidden' }}
          className="align-self-center text-center mt-auto"
        >
          <h1 style={{ fontSize: '5rem', marginTop: '8rem' }}>
            Payment Process
          </h1>
        </div>
      </div>

      
      <SingleData />


      {data.map((info) => (
        <ShowFetchedData info={info}></ShowFetchedData>
      ))}

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default IntegrationWithPay

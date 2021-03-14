import React from 'react'
import Footer from '../Home/Footer/Footer'
import Header from '../Home/Headers/Header'
import header from '../../Components/Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'

import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement} from '@stripe/react-stripe-js';
import SplitcardForm from "./SplitcardForm"

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');



const PaymentProcess = () => {
  
  return (
    <div>
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
        
        <Elements stripe={stripePromise}>
        <SplitcardForm/>
        </Elements>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PaymentProcess

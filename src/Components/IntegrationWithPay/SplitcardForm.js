import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement
} from "@stripe/react-stripe-js";
import { Card } from "react-bootstrap";
import visa from "../../Components/Image & Icon/Bitmap.png"
import { useHistory } from "react-router";



const SplitcardForm = () => {
  const history = useHistory();

  const goToHome = ()=> {
    alert("Are you sure to pay now")
    const url = `/home`
    history.push(url);

  }
    const useOptions = () => {

        const options = useMemo(
          () => ({
            style: {
              base: {
              fontSize:"16px",
              color: "#424770",
              letterSpacing: "0.025em",
              height: '3rem',
              width: '80%',
              borderRadius: '5px',
              border: '1px solid gray',
              
              fontStyle: 'bold',
                fontFamily: "Source Code Pro, monospace",
                "::placeholder": {
                  color: "#aab7c4"
                }
              },
              invalid: {
                color: "#9e2146"
              }
            }
          }),
          []
        );
      
        return options;
      };

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
   <div className="container">
     <Card style={{ width: '80%', padding:"5rem" }}>
<div className="d-flex justify-content-end">
<img style={{height:"2rem", width:"4rem"}} src={visa} alt=""/>

</div>
     
      <form onSubmit={handleSubmit}>
      <label> 
        Card number 
        <CardNumberElement style={{fontSize:"16px",
              color: "#424770",
              letterSpacing: "0.025em",
              height: '3rem',
              width: '80%',
              borderRadius: '5px',
              border: '1px solid gray',}}
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br/>
      <label> 
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br/>
      <label>  
        CVC 
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br/>
      <button onClick={()=> goToHome()} type="submit" style={{height: '2rem',
            width: '8rem',
            borderRadius: '10px',
            border: '1px solid #FF4B2B',
            backgroundColor: '#FF4B2B',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 80ms ease-in',}}>
        Pay Now
      </button>
    </form>
    </Card>
   </div>
  );
};

export default SplitcardForm;

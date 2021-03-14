import React, { useEffect, useState } from 'react'
import Headers from '../../Components/OurClasses/Headers'
import Footer from '../Home/Footer/Footer'
import Header from '../Home/Headers/Header'
import header from '../.../../Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import { useParams } from 'react-router-dom'
import ShowCards from './ShowCards'


const ourClasses = [
  {
    id: 1,
    name:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam temporaLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora"',
    img: 'https://i.ibb.co/tmWmwqr/victor-freitas-546919-unsplash.png',
    name1: 'Book For Psychological Training',
    day: 'Saturday', time: '10.00 AM to 11.00 AM',
    price:"32300 DBT per month"
  },
  {
    id: 2,
    name:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam temporaLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora"',
    img: 'https://i.ibb.co/gVj8pKs/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg',
    name1: 'Book For Self defense',
    day: 'Friday', time: '5.00 PM to 6.00 PM',
    price:"43500 DBT per month"
  },
  {
    id: 3,
    name:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam temporaLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora"',
    img: 'https://i.ibb.co/F8V42tt/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg',
    name1: 'Book For Advance Gym',
    day: 'Thursday', time: '9.00 PM to 10.00 PM',
    price:"1220 DBT per month"
  },
  {
    id: 4,
    name:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam temporaLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora"',
    img: 'https://i.ibb.co/16Lhtqr/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg',
    name1: 'Book For Cardio Training',
    day: 'Wednesday', time: '3.00 PM to 4.00 PM',
    price:"2323 DBT per month"
  },
  {
    id: 5,
    name:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam temporaLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora"',
    img: 'https://i.ibb.co/0jX2RCp/john-fornander-FIu48iuo-4g-unsplash.jpg',
    name1: 'Book For Strength Training',
    day: 'Tuesday', time: '7.00 PM to 8.00 PM',
    price:"710 DBT per month"
  },
  
  {
    id: 6,
    name1: 'Book For Basic GYM',
    name:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam temporaLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus asperiores eligendi est in ipsum, minima sed iure quam tempora"',
    img: 'https://i.ibb.co/34JFNyC/sven-mieke-Lx-GDv7-VA9-M-unsplash.jpg',
    day: 'Monday',
    time: '8.00 PM to 9.00 PM',
    price:"700 DBT per month"
  }
   
]

const ClassDetail = () => {

  

  const { id } = useParams()
  // console.log(id)

  const detailsData = ourClasses.find((tr) => tr.id == id)
  // console.log(detailsData)

  
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(${header})`,
        }}
        class="background"
      >
        <Header/>
        <div
          style={{ color: 'white', overflowX: 'hidden' }}
          className="align-self-center text-center mt-auto"
        >
          <h1 style={{ fontSize: '5rem', marginTop: '8rem' }}>
            {detailsData.name1}
          </h1>
        </div>
      </div>
      <div className="row d-flex container mt-5">
        <div className="col-md-6 col-sm-12">
        <h4>Monthly Cost: <span style={{color:"tomato"}}>  ৳{detailsData.price} </span></h4>

          <img
            
            class="img-fluid"
            style={{ height: '25rem', width: '30rem' }}
            src={detailsData.img}
            alt=""
          />
          <p>{detailsData.name} </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="d-flex row justify-content-center ">
            {ourClasses.map((clients) => (
              <ShowCards
              detailsData={detailsData}
                clients={clients} key={clients.id}
              ></ShowCards>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default ClassDetail

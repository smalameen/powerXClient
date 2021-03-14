import React from 'react'
import ShowClasses from './ShowClasses'

const ourClasses = [
  {
    id: 1,
    name: 'Book For Psychological Training',
    img: 'https://i.ibb.co/tmWmwqr/victor-freitas-546919-unsplash.png',
  },
  {
    id: 2,
    name: 'Book For Self defense',
    img: 'https://i.ibb.co/gVj8pKs/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Book For Advance Gym',
    img: 'https://i.ibb.co/F8V42tt/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Book For Cardio Training',
    img: 'https://i.ibb.co/16Lhtqr/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Book For Strength Training',
    img: 'https://i.ibb.co/0jX2RCp/john-fornander-FIu48iuo-4g-unsplash.jpg',
  },
  {
    id: 6,
    name: 'Book For Basic GYM',
    img: 'https://i.ibb.co/34JFNyC/sven-mieke-Lx-GDv7-VA9-M-unsplash.jpg',
  },
]
const Classes = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {ourClasses.map((clients) => (
          <ShowClasses clients={clients}></ShowClasses>
        ))}
      </div>
    </div>
  )
}

export default Classes

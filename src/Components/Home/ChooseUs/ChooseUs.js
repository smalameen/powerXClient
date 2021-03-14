import React from 'react'
import { Card } from 'react-bootstrap'
import imageOne from '../../Image & Icon/Group 87.png'
import imageTwo from '../../Image & Icon/Group 88.png'
import imageThree from '../../Image & Icon/gift-2.png'

const ChooseUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center"><span style={{color:"yellow"}}> WHY</span> YOU CHOOSE US</h1>
         <div className="row d-flex justify-content-md-around justify-content-sm-center">
            <div className="col-sm-12 col-md-3 p-2">
            <Card style={{
              width: '18rem',
              height: '18rem',
              border: '2px solid gray',
              marginLeft:"2rem",

            }} className="text-white align-items-center p-3">
            <div className="text-center">
              <Card.Img
                class="img-fluid"
                className="justify-content-center"
                src={imageOne}
                alt="Card image"
              />
              <h1>Progression</h1>
              <Card.Text style={{ color: 'black' }}>
                <h4>Free Fitness Training</h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                quasi?
              </Card.Text>
            </div>
          </Card>

            </div>
            <div className="col-sm-12 col-md-3 p-2">
            <Card style={{
              width: '18rem',
              height: '18rem',
              border: '2px solid gold',
              marginLeft:"2rem",
              boxShadow: "2px 2px 12px 12px rgba(0, 0, 255, .2)"
            }} className="text-white align-items-center p-3">
            <div className="text-center">
              <Card.Img
                class="img-fluid"
                className="justify-content-center"
                src={imageTwo}
                alt="Card image"
              />
              <h1>Progression</h1>
              <Card.Text style={{ color: 'black' }}>
                <h4>Free Fitness Training</h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </Card.Text>
            </div>
          </Card>

            </div>
            <div className="col-sm-12 col-md-3 p-2">
            <Card style={{
              width: '18rem',
              height: '18rem',
              border: '2px solid gray',
              marginLeft:"2rem",
            }} className="text-white align-items-center p-3">
            <div className="text-center">
              <Card.Img
                class="img-fluid"
                className="justify-content-center"
                src={imageThree}
                alt="Card image"
              />
              <h1>Progression</h1>
              <Card.Text style={{ color: 'black' }}>
                <h4>Free Fitness Training</h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
              </Card.Text>
            </div>
          </Card>

            </div>
        </div>
    </div>
  )
}

export default ChooseUs

import React from 'react'
import { Card } from 'react-bootstrap'
import imageOne from '../../Image & Icon/hipcravo-5UbIqV58CW8-unsplash.jpg';
import imageTwo from '../../Image & Icon/john-fornander-FIu48iuo_4g-unsplash.jpg'
import imageThree from '../../Image & Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg'


import './item.css'
const Items = () => {
  return (
    <div>

<h1 className="text-center font-weight-bold">Our Services</h1>
    <div   className="container-fluid container p-3">
      <div class="d-flex m-3 row justify-content-md-between justify-content-sm-between mt-sm-2">
      
      <div className="col-md-3 col-sm-12 mt-2" 
        class="background-image1"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 2), rgba(0, 0, 0, 0.5) ), url(${imageTwo})`,
          zIndex: '2',
        }}>
        <Card className="text-white align-items-center">
          <Card.ImgOverlay>
          
            <div className="text-center">
            <Card.Img className="justify-content-center" style={{height:"3rem", width:"2rem"}} src="https://i.ibb.co/xSH7dL7/Group-80.png" alt="Card image" />
            <h1>Progression</h1>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className="col-md-3 col-sm-12"
        class="background-image1"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ), url(${imageThree})`,
          zIndex: '2',
        }}>
        <Card className="text-white align-items-center">
          <Card.ImgOverlay>
          
            <div className="text-center">
            <Card.Img className="justify-content-center" style={{height:"3rem", width:"5rem"}} src="https://i.ibb.co/GCc5NvB/Group-81.png" alt="Card image" />
            <h1 style={{color:"yellow"}}>Work-out</h1>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className="col-md-3 col-sm-12 mt-2"
        class="background-image1"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(${imageOne})`,
          zIndex: '2',
        }}>
        <Card className="text-white align-items-center">
          <Card.ImgOverlay>
          
            <div className="text-center">
            <Card.Img className="justify-content-center" style={{height:"3rem", width:"2rem"}} src="https://i.ibb.co/kGKpKvX/Group-82.png" alt="Card image" />
            <h1>Nutrition</h1>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Items

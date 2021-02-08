import React from 'react'
import model from '../../Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg'
import TypeWriterEffect from 'react-typewriter-effect';
const AboutUs = () => {
  return (
    <div style={{ color: '#FFF0F5', alignItems:"center" }}>
      <div className="row d-flex justify-content-sm-center justify-content-md-center">
        <div className="col-md-6 img-fluid">
          <img src={model} class="img-fluid" alt="..." />
        </div>
        <div className="col-md-6 text-center align-self-center mb-5">
            <p className="display-3 font-weight-bold"> About Us</p>
           
            <TypeWriterEffect className ="align-self-center"
             textStyle={{
              
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
              textAlign:"center",
              
              
            }}
            startDelay={100}
            cursorColor="black"
            text= 
            "WE ARE HERE TO DREAM! "
            typeSpeed={100}
            loop={true}
          /> <br/>
          
          <h3 style={{ color: 'black' }}>
            OUR TEAM IS ALWAYS WITH YOUR TO SURVE YOUR!
          </h3>
          <p style={{ color: 'black' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde
            ipsum magnam, aperiam nihil repellendus recusandae quis similique
            reprehenderit ducimus fugit harum optio aspernatur ea? Sit,
            repellendus! Autem neque earum enim veniam quasi impedit esse quo.
            Aliquam reiciendis perspiciatis possimus eligendi voluptas, iure
            earum eos atque cupiditate quis modi animi!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

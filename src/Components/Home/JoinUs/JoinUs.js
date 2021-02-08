import React from 'react'
import { Button } from 'react-bootstrap'

const JoinUs = () => {
  return (
    
      <div 
        style={{ color: 'white' }}
        className="d-flex row justify-content-center container p-5 ml-lg-5"
      >
        <div className="col-sm-12 col-md-6">
          <h1>
            THE BEST FITNESS <br /> HOUSE IN THE TOWN
          </h1>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            pariatur dolorem ipsa minus saepe quaerat,
            <br /> non atque reprehenderit id exercitationem?
          </small>
          <br />
          <br />
          <Button
            style={{
              height: '4rem',
              width: '12rem',
              fontSize: '2rem',
              fontWeight: '600',
              borderRadius:"square"
              
            }}
            variant="warning"
    
          > 
            JOIN US
          </Button>
        </div>
        <br/>

        <div 
          className="pd-md-2"
          style={{  border: 'none' }}
          className="col-sm-12 col-md-6"
        > <br/>
          <iframe
            src="https://www.youtube.com/embed/BHY0FxzoKZE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    
  )
}

export default JoinUs

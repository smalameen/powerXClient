import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';

const ShowClasses = ({ clients }) => {
  

  const history = useHistory();

  const goToClassDetails = (id)=> {
    
    const url = `classDetails/${id}`
    history.push(url);
    
        
}
  
  return (
    
    <div>
      <Card onClick={() => goToClassDetails(clients.id)} className="mt-4 ml-3">
        <Card.Img
          style={{ height: '18rem', width: '18rem' }}
          src={clients.img}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title  style={{marginTop:"15rem",overflow:"visible", height:"3rem", width:"15rem", backgroundColor:"yellow", color:"black", textAlign:"center", cursor:"pointer"}}> <p> {clients.name}</p> </Card.Title>
        </Card.ImgOverlay>
      </Card>
      {/* <ShowClasses/> */}
    </div>
  )
}

export default ShowClasses

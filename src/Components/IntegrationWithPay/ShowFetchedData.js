import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { dataContext } from '../../App'
import { useHistory } from 'react-router'

const ShowFetchedData = ({ info }) => {
  const [phone, setPhone] = useContext(dataContext);

  const history = useHistory();

  const goToConfrimation = ()=> {
    
    const url = `/confirmation`
    history.push(url);
    
        
}

  return (
    <div className="container mt-2">
      {info.phoneNumber === phone.phone ? (
        <Card style={{ width: '80%', textAlign: 'center' }}>
          <ListGroup variant="flush">
            <ListGroup.Item style={{backgroundColor:"#edffec"}}>
              <b>Name: {info.name}</b>
            </ListGroup.Item>
            <ListGroup.Item>Time Slot: {info.timeSlot}</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#edffec"}}>Monthly cost: ${info.price}</ListGroup.Item>
          </ListGroup> 
          <ListGroup.Item >Your training segment: {info.trainingSegment}</ListGroup.Item>
          <br/>
          <Button onClick={()=> goToConfrimation()}>Pay now</Button>
        </Card>
      ) : (
        console.log('no data')
      )}
    </div>
  )
}

export default ShowFetchedData

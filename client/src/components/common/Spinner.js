import React from 'react'
import spinner from './spinner.gif';
import {Row, Col, ProgressBar} from 'react-materialize'

export default  () => {
  return (
    <div>
        {/* <img src={spinner} 
        alt="Loading..." 
        style={{width: '200px', margin: 'auto', display: 'block'}}
        /> */}

        <Row>
        <Col s={12}>
          <ProgressBar />
          {/* <Preloader size='small'/> */}

        </Col>
        </Row>


    </div>
  )
}

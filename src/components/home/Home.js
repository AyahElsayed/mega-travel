import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import './home.css'
const Home = () => {
  return (
    <>
      <div className='services container'>
        <h2 className='servicesTitle'>
          <span>Our Services</span>
        </h2>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/Flight.jpg" style={{ minHeight: '228px' }}/>
            <Card.Body>
              <Card.Title>Flight</Card.Title>
              <Card.Text>
                Inspired by opinions of our valued customers, "cheapest airfare in Egypt" has been the registered trademark of...
              </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/tours.jpg" style={{ minHeight: '228px' }} />
            <Card.Body>
              <Card.Title>Tours</Card.Title>
              <Card.Text>
                Either you require relaxing or adventure tours, Our tours have been prepared to suit all our clients’ needs, book your...            </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/domestic.jpg" style={{ minHeight: '228px' }}/>
            <Card.Body>
              <Card.Title>Domestic tourism </Card.Title>
              <Card.Text>
                Either you require relaxing or adventure tours, Our tours have been prepared to suit all our clients’ needs, book your...            </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/foreign.jpg" style={{ minHeight: '228px' }} />
            <Card.Body>
              <Card.Title>Foreign Tourism </Card.Title>
              <Card.Text>
                Either you require relaxing or adventure tours, Our tours have been prepared to suit all our clients’ needs, book your...            </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>


      {/* offers */}
      <div className='services container'>
        <h2 className='servicesTitle'>
          <span>Offers</span>
        </h2>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/Honeymoon.webp" style={{ minHeight: '297px' }} />
            <Card.Body>
              <Card.Title>Honey moon Offers</Card.Title>
              <Card.Text>
                We offers a wide range of offers all over the world, choose what suites you from our various offers
              </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/Sham El Naseem.jpg" style={{ minHeight: '297px' }}/>
            <Card.Body>
              <Card.Title>Sham El Naseem offers</Card.Title>
              <Card.Text>
                We offers a wide range of offers all over the world, choose what suites you from our various offers
              </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/vip.jpg" style={{ minHeight: '297px' }}/>
            <Card.Body>
              <Card.Title>VIP offers</Card.Title>
              <Card.Text>
                We offers a wide range of offers all over the world, choose what suites you from our various offers
              </Card.Text>
              <Button variant="primary">More..</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>


      {/* Customer Reviews */}
      <h2 className='servicesTitle'>
        <span>Customer Reviews</span>
      </h2>
      <div className='reviews container'>
        <Card style={{ width: '18rem', alignItems: 'center' }}>
          <Card.Img variant="top" src="./assets/steve.jpeg" className='imageReview' />
          <Card.Title>steve jobs</Card.Title>
          <Card.Body>
            <Card.Text>
              <q>Some quick example text to build on the card title and make up the bulk of
                the card's content.</q>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', alignItems: 'center' }}>
          <Card.Img variant="top" src="./assets/john3.webp" className='imageReview' />
          <Card.Title>Andy Mark</Card.Title>
          <Card.Body>
            <Card.Text>
              <q>Some quick example text to build on the card title and make up the bulk of
                the card's content.</q>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', alignItems: 'center' }}>
          <Card.Img variant="top" src="./assets/john2.webp" className='imageReview' />
          <Card.Title>petter done</Card.Title>
          <Card.Body>
            <Card.Text>
              <q>Some quick example text to build on the card title and make up the bulk of
                the card's content.</q>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', alignItems: 'center' }}>
          <Card.Img variant="top" src="./assets/john.webp" className='imageReview' />
          <Card.Title>john done</Card.Title>
          <Card.Body>
            <Card.Text>
              <q>Some quick example text to build on the card title and make up the bulk of
                the card's content.</q>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Home
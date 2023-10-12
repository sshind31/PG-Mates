import slide1 from './images/carousel1.jpg';
import slide2 from './images/carousel2.jpg';
import slide3 from './images/carousel3.jpg';
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Carouselslide() {
  const navigate=useNavigate()
  const state=useSelector((state)=>state);
  return (
    <div className='mt-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1} height={500} width={1500}
            alt="First slide"
          />
          <Carousel.Caption>
          {state.loggedin.IsLoggedIn ? "":(
            <ButtonGroup size="lg" className="mb-2">
              <Button onClick={e=>navigate('/login')} variant="info gradient me-2">Login</Button>
              <Button variant="success gradient" onClick={e=>{navigate('/cregister')}}>Signup</Button>
            </ButtonGroup>
            )}
            <p className="text-dark fw-bold">Home is the starting place of love, hope and dreams. <br />
              The magic thing about home is that it feels good to leave, and it feels even better to come back.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2} height={500} width={1500}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark fw-bold">Home Sweet Home</h3>
            <p className="text-dark fw-bold">Home is where love resides, memories are created, friends always belong, <br />
              and laughter never ends.” “A house is made of bricks and beams</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3} height={500} width={1500}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark fw-bold">There’s no place like home</h3>
            <p className="text-dark fw-bold">You will never be completely at home again, because part of your heart <br />
              will always be elsewhere. That is the price you pay for the richness of loving and knowing people in more than one place</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

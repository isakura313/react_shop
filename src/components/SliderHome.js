import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './SliderHome.css'

const slideImages = [
    'https://images.wbstatic.net/bners1/big_fashion_days_0806.jpg',
    'https://images.wbstatic.net/bners1/big_popolam_08061.jpg',
    'https://images.wbstatic.net/bners1/big_electro_0806_7556.jpg',
    'https://images.wbstatic.net/bners1/big_travel_0806.jpg'
]


const SliderHome = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default SliderHome
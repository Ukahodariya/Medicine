import React from 'react'
import Slider from "react-slick"; // Slider from react-slick
import './slider.scss'
import Imgone from '../../../assets/image/herobanner-one.webp'
import Imgtwo from '../../../assets/image/herobanner-two.webp'
import Imgthree from '../../../assets/image/herobanner-three.webp'
import Imgfour from '../../../assets/image/herobanner-four.webp'
import Imgfive from '../../../assets/image/herobanner-five.webp'
export default function CustomSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
            <div className='herobanner-slider'>
                    <Slider {...settings}>
                        <div className='herobanner-slider-image'>
                            <img src={Imgone}></img>
                        </div>
                        <div className='herobanner-slider-image'>
                            <img src={Imgtwo}></img>
                        </div>
                        <div className='herobanner-slider-image'>
                            <img src={Imgthree}></img>
                        </div>
                        <div className='herobanner-slider-image'>
                            <img src={Imgfour}></img>
                        </div>
                        <div className='herobanner-slider-image'>
                            <img src={Imgfive}></img>
                        </div>
                    </Slider>
                </div>
    );
}

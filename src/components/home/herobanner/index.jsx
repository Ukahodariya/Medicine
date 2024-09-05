import React from 'react'
import './herobanner.scss'
import Slider from "react-slick";
import Imgmain from '../../../assets/image/herobanner-main.webp'
import Imgone from '../../../assets/image/herobanner-one.webp'
import Imgtwo from '../../../assets/image/herobanner-two.webp'
import Imgthree from '../../../assets/image/herobanner-three.webp'
import Imgfour from '../../../assets/image/herobanner-four.webp'
import Imgfive from '../../../assets/image/herobanner-five.webp'
export default function Herobanner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
    };
    return (
        <div className='herobanner'>
            <div className='container'>

                <div className='herobanner-image'>
                    <img src={Imgmain}></img>
                </div>
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
            </div>
        </div>
    )
}

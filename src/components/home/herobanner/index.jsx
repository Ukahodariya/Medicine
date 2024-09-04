import React from 'react'
import './herobanner.scss'
import Slider from "react-slick";
import Imgmain from '../../../assets/image/herobanner-main.webp'
import Imgone from '../../../assets/image/herobanner-one.webp'
import Imgtwo from '../../../assets/image/herobanner-two.webp'
import Imgthree from '../../../assets/image/herobanner-three.webp'
import Imgfour from '../../../assets/image/herobanner-four.webp'
import Imgfive from '../../../assets/image/herobanner-five.webp'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="arrow arrow-right"
            onClick={onClick}
        ><FaArrowRight style={{ color: "white", display: "block" }} className="right-icon" /></div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="arrow arrow-left"
            onClick={onClick}
        ><FaArrowLeft style={{ color: "white", display: "block" }} className="left-icon" /></div>
    );
}
export default function Herobanner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='herobanner'>
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
    )
}

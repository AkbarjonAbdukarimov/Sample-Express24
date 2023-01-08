import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import './Carousel.css'

import CarouselCard from './CarouselCard';

const Carousel = ({ carousel }) => {
    return <>
        <div className="mb-5"> <Swiper
            spaceBetween={0}
            slidesPerView={6}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                320: {
                    slidesPerView: 1,

                },
                640: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 4,

                },
                1024: {
                    slidesPerView: 6,

                },
            }}
        >
            {carousel.map(i => <SwiperSlide> <CarouselCard title={i.title} desc={i.desc} image={i.image} /></SwiperSlide>)}
        </Swiper></div>

    </>

}
export default Carousel
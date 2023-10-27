import React from 'react'
import Slider1 from '../img/slider1.webp'
import Slider2 from '../img/slider2.webp'
import Slider3 from '../img/slider3.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation} from 'swiper/modules';

function Slider() {
    SwiperCore.use([Navigation]);
  return (
<Swiper navigation>
<div className='h-[400px]'>
     <SwiperSlide><div className='h-[400px]'><img  src={Slider1} alt="" /></div></SwiperSlide>
     <SwiperSlide><div className='h-[400px]'><img  src={Slider2} alt="" /></div></SwiperSlide>
     <SwiperSlide><div className='h-[400px]'><img  src={Slider3} alt="" /></div></SwiperSlide>
        
</div>
</Swiper>
  )
}

export default Slider


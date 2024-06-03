import React from 'react';
import Slider from 'react-slick';
import logo from '../assets/Image/Ellipse76.png';

function Sliders(props) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    const showSliders = [
        {
            id: 1,
            image: logo,
            name: 'John Fang',
            link: 'wordfaang.com',
            text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        },
        {
            id: 2,
            image: logo,
            name: 'John Fang',
            link: 'wordfaang.com',
            text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        },
        {
            id: 3,
            image: logo,
            name: 'John Fang',
            link: 'wordfaang.com',
            text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        },
        {
            id: 4,
            image: logo,
            name: 'John Fang',
            link: 'wordfaang.com',
            text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        },
    ];
    return (
        <div className="bg-[#9C69E2] rounded-[50px] md:p-20 xs:p-10 mb-20 " data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-[40px] font-bold text-white mb-10 xs:text-2xl">Testimonials</h1>
            <Slider {...settings}>
                {showSliders.map((slider) => {
                    return (
                        <div key={slider.id}>
                            <div className="flex flex-wrap bg-white rounded-xl lg:p-20 xs:p-5 gap-8">
                                <img src={slider.image} alt="" className="w-28 h-20" />
                                <div>
                                    <div className="mb-5">
                                        <h1 className="text-[#212353] hover:text-[#9C69E2] cursor-pointer font-bold text-lg">
                                            {slider.name}
                                        </h1>
                                        <p className="text-[#9C69E2] text-sm">{slider.link}</p>
                                    </div>
                                    <div className="text-[#4B5D68]">
                                        <p className="lg:w-[400px] xs:w-auto">{slider.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Sliders;

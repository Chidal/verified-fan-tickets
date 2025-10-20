"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
  };
  const mockEvents = ['1', '2', '3']; // Mock data

  return (
    <div className="w-full">
      <Slider {...settings}>
        {mockEvents.map((id) => (
          <div key={id} className="p-4 bg-gray-200 dark:bg-gray-700 hover:scale-105 transition transform">
            Event {id}
          </div>
        ))}
      </Slider>
    </div>
  );
}
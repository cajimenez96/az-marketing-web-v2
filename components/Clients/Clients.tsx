"use client";

import Image from "next/image";
import Slider from "react-slick";
import { CLIENTS } from "./constants";

interface IClients {
  id?: string;
}

const SLIDER_SETTINGS = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const Clients = ({ id }: IClients) => {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden max-h-[230px]! my-[55px]! bg-tonico "
    >
      <div className="relative overflow-hidden w-full px-4">
        <Slider {...SLIDER_SETTINGS}>
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="px-2 md:px-4 flex items-center justify-center outline-none focus:outline-none mx-auto my-auto"
            >
              <div className="shrink-0 flex items-center justify-center">
                <Image
                  src={client.image}
                  alt={`Cliente ${client.name}`}
                  className="object-cover brightness-0"
                  width={120}
                  height={60}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;

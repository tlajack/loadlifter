"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import slide01 from "../images/2020-842-clean-website.png";
import slide02 from "../images/2020-1056-website.png";
import slide03 from "../images/2020-2032-clean-website.png";
import slide04 from "../images/2020-Agri-website.png";
import slide05 from "../images/2020-blade-website.png";
import slide06 from "../images/slideshow-12.jpg";

import "./embla.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={slide06} alt="slide 01" className="slideImage" priority />
        </div>
        <div className="embla__slide">
          <Image src={slide01} alt="slide 01" className="slideImage" />
        </div>
        <div className="embla__slide">
          <Image src={slide02} alt="slide 01" className="slideImage" />
        </div>
        <div className="embla__slide">
          <Image src={slide03} alt="slide 01" className="slideImage" />
        </div>
        <div className="embla__slide">
          <Image src={slide04} alt="slide 01" className="slideImage" />
        </div>
        <div className="embla__slide">
          <Image src={slide05} alt="slide 01" className="slideImage" />
        </div>
      </div>
    </div>
  );
}

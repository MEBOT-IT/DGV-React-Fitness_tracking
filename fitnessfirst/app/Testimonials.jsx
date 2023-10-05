import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonialsData } from './testimonialsData';

// TestimonialsSlider.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function TestimonialsSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Automatically advance the slider every few seconds
    const interval = setInterval(() => {
      if (currentTestimonial < testimonialsData.length - 1) {
        setCurrentTestimonial(currentTestimonial + 1);
      } else {
        setCurrentTestimonial(0);
      }
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    if (currentTestimonial < testimonialsData.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    } else {
      setCurrentTestimonial(0);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    } else {
      setCurrentTestimonial(testimonialsData.length - 1);
    }
  };

  return (
    <div className="testimonials-slider">
      <div className="testimonial">
        <Image
          src={testimonialsData[currentTestimonial].image}
          alt="Testimonial"
          width={300}
          height={399}
        />
        <p className="quote">{testimonialsData[currentTestimonial].quote}</p>
        <p className="review">{testimonialsData[currentTestimonial].review}</p>
        <p className="name">{testimonialsData[currentTestimonial].name}</p>
        <p className="status">{testimonialsData[currentTestimonial].status}</p>
      </div>
      <div className="slider-controls">
        <button onClick={prevTestimonial}>&lt; Previous</button>
        <button onClick={nextTestimonial}>Next &gt;</button>
      </div>
    </div>
  );
}

export default TestimonialsSlider;

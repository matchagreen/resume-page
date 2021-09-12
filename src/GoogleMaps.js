import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
};
const GoogleMaps = () => {
  return (
    <div className="maps">
      <h2 className="text-center">Location</h2>
      <div data-aos="fade-up" className="container py-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.423900605822!2d110.35271701456327!3d1.5148529614455313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba7eff52db9fb%3A0x1f3e942567606c6!2z5pyo5pyoT3JpZ2luIFRyZWF0cw!5e0!3m2!1sen!2smy!4v1626701355412!5m2!1sen!2smy"
          width="1300"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMaps;

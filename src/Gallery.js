import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div data-aos="fade-up">
            <img
              src="https://scontent-kut2-1.xx.fbcdn.net/v/t1.6435-9/152917483_139425788039633_1577854610232883791_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeE_GtaY6UP6pNUKqOPDyCOMKDw0Ij5TbPgoPDQiPlNs-J-UaqFvidWyAVjGg50sSZXLI9FAA0QunOS0ZNTT277v&_nc_ohc=jgAz0KdeCtsAX998JAm&_nc_ht=scontent-kut2-1.xx&oh=0888c97770f5628ff121c6e5014c5568&oe=60FAC706"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              src="https://scontent-kut2-1.xx.fbcdn.net/v/t1.6435-9/139672971_116834850298727_8407177217886686902_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGXiZeO39bc75-6iEXFrwKYQACWWJGxwIRAAJZYkbHAhHY5ngPLo4cCpaGN0m1lbOr4u5t6ez9cpcCDYmfQ3pEs&_nc_ohc=v6EYtQZ7bGwAX9WasLe&_nc_oc=AQmlIFWrcOR6wwRW1Hx8bDIUfL0ckwY6x91eke-dg0Snko5XNIbB4QdRk21LXIceGj0&tn=Fu4t1stm82x6i1Tm&_nc_ht=scontent-kut2-1.xx&oh=6896090d0c14d1c96908978b4ffb36e3&oe=60F9F10E"
              className="w-100 h-50 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div data-aos="fade-up">
            <img
              src="https://scontent-kut2-2.xx.fbcdn.net/v/t1.6435-9/137620137_116834433632102_9197659182745930374_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeESv4TxhNOG71c5O85Tfo0k0H9An52P2OfQf0CfnY_Y59ZqZMbImUE1pFFs4n41extPIHkIcdyy_JIUmOVP37FR&_nc_ohc=KYE5dC9LwgwAX-YwMgo&_nc_ht=scontent-kut2-2.xx&oh=f5d8010d44a9b3bfddf197bc1930e4f2&oe=60FB18B8"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              src="https://scontent-kut2-1.xx.fbcdn.net/v/t1.6435-9/151589491_136026511712894_4538630821083311655_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeElaVFCPxuDnXSnA80gmZIr_VvWJa4RTW39W9YlrhFNbccKrtTNGLPNJShftKEvP6gVteUMhNqitd14GA6C6w0Z&_nc_ohc=2yxe73hTrt8AX-aGuJG&_nc_ht=scontent-kut2-1.xx&oh=d9de4f9bbfdb34ea47ca2a7dec843738&oe=60FA753B"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div data-aos="fade-up">
            <img
              src="https://scontent-kut2-1.xx.fbcdn.net/v/t1.6435-9/205386129_207465231235688_8706672582991497293_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeE1jIUHnCjVesaQnBnMULduD3q6WK7MaTwPerpYrsxpPDftcoFvEohImthHG8-Qfw2lMqi-k37K8loEDZxqXaDo&_nc_ohc=2TqaEi0z80cAX_-CTj3&_nc_ht=scontent-kut2-1.xx&oh=7bc1624c3ab50209a7b8083a2ebfe0f7&oe=60FAC9D4"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              src="https://scontent-kut2-2.xx.fbcdn.net/v/t1.6435-9/148174884_129787695670109_1537449674794822345_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeEDwSxrwDQPq3Jvf9h3r1HWjlH1GXbmokGOUfUZduaiQTInMCxiEiAcTyx7Zua2GWB2EMUTYolGsfhogMF3HLrr&_nc_ohc=-qMZq3ssobMAX8p3VDA&tn=Fu4t1stm82x6i1Tm&_nc_ht=scontent-kut2-2.xx&oh=3ad54acf210b935f353aaebc08dbffae&oe=60F97BD2"
              className="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

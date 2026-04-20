import React from 'react';
import Banner from '../components/Banner';

const OurGalleryPage = () => {

    const images = [
        "/images/our-gallery/1.jpeg",
        "/images/our-gallery/2.jpeg",
        "/images/our-gallery/3.jpeg",
        "/images/our-gallery/4.jpeg",
        "/images/our-gallery/5.jpeg",
        "/images/our-gallery/6.jpeg",
        "/images/our-gallery/7.png",
        "/images/our-gallery/8.png",
        "/images/our-gallery/9.png",
        "/images/our-gallery/10.png",
      ];
    

    return (
        <div className='bg-light'>
            {/* Banner Section */}
            <Banner
                title='Our Gallery'
                image='./images/our-gallery-banner.png'
                breadcrumb={[
                    { name: "Home", link: "/" },
                    { name: "Gallery" }
                ]}
            />
 
            <div className="container my-5">
                <div className="row g-2 ">

                    {images.map((img, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                            <img
                                src={img}
                                alt="gallery"
                                className="img-fluid gallery-img p-2 shadow-lg rounded-2"
                            />
                        </div>
                    ))}

                </div>
          </div>
        </div>
    );
}

export default OurGalleryPage;
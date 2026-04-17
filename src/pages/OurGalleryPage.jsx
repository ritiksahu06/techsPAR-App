import React from 'react';
import Banner from '../components/Banner';

const OurGalleryPage = () => {
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

                    {[...Array(6)].map((_, i) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                            <img
                                src={`./images/our-gallery/${i + 1}.jpg`}
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
import React from 'react';
import Banner from '../components/Banner';

const MobileApp = () => {
    return (
        <>
            {/* Banner Section */}

            <Banner
                title='Mobile App Development'
                image='/images/mobile-app-development/mobile-app-development-banner.jpg'
                breadcrumb={[
                    { name: "Home", link: "/" },
                    { name: "Mobile App Development" }
                ]}
            />

            <div className="container">


                {/* Mobile App Development */}
                <div className="row g-4 my-5">
                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-12">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Mobile App Development</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>We are passionate about designing and developing intuitive, user-friendly mobile applications that capture attention and deliver a seamless digital experience. Our goal is to push the boundaries of design and technology to create high-quality, engaging apps tailored to your business needs.</p>
                        <p>At TechsPAR Solutions, we specialize in building custom mobile applications that are strategically planned, carefully designed, continuously developed, and thoroughly tested to ensure top-tier performance and functionality. With years of experience in the evolving mobile ecosystem, we have refined our development processes to deliver efficient, cost-effective solutions.</p>
                        <p>Beyond development, we act as your technology partner—guiding you from concept to launch and beyond. We help shape your ideas, recommend the right technologies, and suggest features and designs that align with your target audience. Our commitment is to support you throughout the entire app lifecycle, ensuring successful delivery and long-term value.</p>

                    </div>

                </div>

                {/* Android App Development */}
                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Android App Development</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <p>Your app will run smoothly across all devices and remain up to date with the latest security standards. Android app development is one of the core strengths of TechsPAR Solutions, allowing us to deliver reliable and high-performance applications.</p>
                        <p>For inquiries, feel free to email us at <span className='text-primary'>info@techspar.in </span>
                            or get in touch with us. Our business development team at TechsPAR Solutions will be happy to assist you.</p>


                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-6 animate-right">
                        <img
                            src="/images/mobile-app-development/android-app-development.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>

                </div>


                {/* IOS App Development */}
                <div className="row g-4 my-5">

                    <div className="col-lg-6 animate-left">
                        <img
                            src="/images/mobile-app-development/ios-app-development.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">IOS App Development</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>Our extensive expertise in iOS mobile app development and Swift enables us to deliver high-quality, performance-driven applications tailored to your requirements. iOS app development is one of the core strengths of Techspar, allowing us to create secure, scalable, and user-friendly apps that meet your business needs.</p>
                        <p>We focus on building reliable solutions with seamless API integration, ensuring smooth functionality and an enhanced user experience across all Apple devices.</p>

                    </div>

                </div>
            </div>
        </>
    );
}

export default MobileApp;

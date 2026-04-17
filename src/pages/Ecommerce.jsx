import React from 'react';
import Banner from '../components/Banner';



const Ecommerce = () => {
    return (
        <>
            {/* Banner Section */}

            <Banner
                title='E-Commerce Development'
                image='/images/e-commerce-developement/e-commerce-developement-banner.jpg'
                breadcrumb={[
                    { name: "Home", link: "/" },
                    { name: "E-Commerce Development" }
                ]}
            />

            <div className="container">


                {/* E-Commerce Development */}
                <div className="row g-4 my-5">
                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-12">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">E-Commerce Development</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>E-commerce development focuses on building powerful online stores that allow businesses to sell products and services efficiently. A well-designed e-commerce website acts as a digital storefront, helping you showcase products, manage inventory, and process orders smoothly.</p>
                        <p>At Techspar, we create secure, scalable, and user-friendly e-commerce websites that deliver a seamless shopping experience and drive business growth.</p>

                    </div>

                    <div className="container">

                        <h5>What makes techPAR stand out in this highly competitive ecommerce market is our:</h5>

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Excellent customer service
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Brand focus and consciousness
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Delivery of outstanding value to satisfy customers
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Global scale and extended reach
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Better understanding of influencing factors in ecommerce market to provide better services for customers every time
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Use of industry best practices with extensive testing and optimization techniques
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Proven dedicated teams with both consumer & enterprise focus
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Teams that focus on R&D, accelerators/PoCs to reduce time to market
                                </span>
                            </p>

                        </div>
                    </div>

                </div>

                {/* User-Friendly Shopping Experience */}
                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">User-Friendly Shopping Experience</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>We design intuitive and easy-to-navigate interfaces that enhance the overall customer journey. With fast loading speeds and smooth navigation, we ensure users stay engaged and enjoy a seamless shopping experience.</p>
                        <p>Our focus is on creating clean layouts, clear product displays, and a hassle-free checkout process that reduces drop-offs and improves conversions. Every element is carefully designed to make browsing, selecting, and purchasing products simple and convenient for users.</p>
                        <p>By combining usability with modern design, we help deliver a smooth, enjoyable experience that keeps customers coming back.</p>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-6">
                        <img
                            src="/images/e-commerce-developement/user-friendly-shopping-experience.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>

                </div>


                {/* Secure Payment Integration */}
                <div className="row g-4 my-5">

                    <div className="col-lg-6">
                        <img
                            src="/images/e-commerce-developement/secure-payment-integration.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Secure Payment Integration</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>We integrate trusted and secure payment gateways to ensure safe and reliable transactions for your customers. Our solutions support multiple payment options, including debit/credit cards, net banking, UPI, and digital wallets.</p>
                        <p>We prioritize data security and encryption to protect sensitive customer information and build trust. With a smooth and hassle-free checkout process, we help reduce cart abandonment and improve overall customer confidence.</p>

                    </div>

                </div>


                {/* Product & Inventory Management */}
                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Product & Inventory Management</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>We provide efficient product and inventory management systems that make it easy to organize and control your online store. You can manage product listings, categories, pricing, and stock levels with ease.</p>
                        <p>Our solutions help you track inventory in real time, avoid stock shortages or overstocking, and ensure smooth order management. With a simple and user-friendly backend, you can quickly update products and keep your store running efficiently.</p>

                    </div>

                    {/* RIGHT SIDE IMAGE */}

                    <div className="col-lg-6">
                        <img
                            src="/images/e-commerce-developement/product-inventory-management.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>

                    
                </div>

            </div>



        </>
    );
}

export default Ecommerce;

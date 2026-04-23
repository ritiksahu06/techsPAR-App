import React from 'react';
import Banner from '../components/Banner';

const WebSolutionsPage = () => {
    return (
        <>
            {/* Banner Section */}

            <Banner
                title='Web Solutions'
                image='/images/our-services/software-solution-banner.png'
                breadcrumb={[
                    { name: "Home", link: "/" },
                    { name: "Web Solutions" }
                ]}
            />

            <div className="container">



                <div className="row g-4 my-5">
                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Web Development</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>
                            With over 5 years of experience in web development, we at TechsPAR specialize in building websites that deliver an excellent user experience and are easy to manage.
                        </p>

                        <p>
                            Websites serve multiple purposes. They can enhance brand awareness, host web applications with specific functionalities, and showcase your work.
                        </p>
                        <p>
                            In the web development industry, development typically refers to the coding and creation of the website’s structure rather than the design and visual appearance.
                        </p>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-6 animate-right">
                        <img
                            src="/images/our-services/web-development.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>
                    <div className="container">
                        <p>
                            Whether you are looking for a dynamic or static website, TechsPAR offers tailored solutions to meet your needs.
                        </p>

                        <p>
                            Our team focuses on usability, maintenance, best practices, and SEO optimization to ensure your website performs effectively.
                        </p>

                        <p>
                            We also provide web application development using PHP, helping businesses build scalable and cross-platform solutions.
                        </p>
                    </div>
                </div>

                {/* FULL WIDTH CONTENT BELOW */}
                <div className="row g-4 my-5">

                    <div className="col-lg-6 animate-left">
                        <img
                            src="/images/our-services/web-application.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Web Application Development</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>
                            A web application is an interactive software solution built using web technologies that users can access directly through a web browser. It enables web-based platforms to function similarly to mobile applications, offering dynamic features and real-time user interaction.
                        </p>

                        <p>Web applications are designed to engage users by delivering responsive and interactive experiences, while still being accessed over the internet. They typically combine both front-end and back-end technologies to ensure seamless performance and functionality.</p>

                    </div>

                    {/* RIGHT SIDE IMAGE */}

                    <div className="container">
                        <p>Although closely related to websites, web applications differ in terms of interactivity and purpose. While both share common development principles, web applications focus more on user engagement and advanced functionality.</p>

                        <p>One of the key advantages of web applications is their cross-platform compatibility. They can operate smoothly on any device—whether Android, iOS, or desktop—without requiring installation, as long as there is an active internet connection.</p>
                        <p>Overall, web applications provide a flexible, efficient, and user-friendly way to deliver powerful digital experiences across multiple platforms.</p>
                    </div>
                </div>




                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Corporate sites</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <p>Corporate website development plays a vital role in today’s business landscape. Over the years, both corporate website development and design have become essential for the success of organizations ranging from small businesses to large multinational corporations. Regardless of your products, services, or business goals, growth is only possible when you expand your customer base—and the internet remains the most powerful medium to achieve that.</p>
                        <p>This is why corporate website design is so important, especially when combined with an effective digital marketing strategy. It enables your business to connect with clients across the globe at a fraction of the cost of traditional advertising methods such as television or radio. With a strong online presence, your business is no longer limited to a local audience—it becomes global.</p>


                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-6 animate-right">
                        <img
                            src="/images/our-services/corporate-sites.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>
                    <div className="container">
                        <p>Our corporate web development approach focuses on delivering user-friendly, scalable, and results-driven solutions that help you stay ahead of the competition.</p>
                        <p>Corporate websites can be structured in various ways to effectively present content, including blogs, FAQ sections, newsletter signups, product pages, and more—ensuring meaningful engagement with your audience.</p>
                        <p>As a leading corporate web design company, TechsPAR specializes in enhancing the online presence of businesses like yours. Our team consists of skilled professionals who stay at the forefront of modern web technologies and are passionate about building high-quality corporate websites from the ground up, as well as optimizing existing ones for better performance.</p>
                    </div>
                </div>





                <div className="row g-4 my-5">

                    <div className="col-lg-6 animate-left">
                        <img
                            src="/images/our-services/brand-product.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Brand/Product sites</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>Every company needs a website, but it’s a common misconception that a logo alone defines a brand. A logo is simply a visual identifier—it represents your brand, but it does not define it.</p>
                        <p>A brand is shaped by how people perceive your business. It reflects your quality, service, values, integrity, and the overall experience you provide to your customers.</p>
                        <p>Creating a well-designed identity system helps establish a strong visual presence and gives your brand a clear and consistent voice.</p>


                    </div>

                    {/* RIGHT SIDE IMAGE */}

                    <div className="container">
                        <p>However, branding goes beyond visuals. Building a strong brand requires consistency, clarity, and the right strategy to define, shape, and communicate who you truly are.</p>
                        <div>
                            <h4>The benefits reaped from branding are numerous. Here are just a few:</h4>
                        </div>

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    It helps you gain sales and market share through familiarity and trust
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Results in future and current customers remembering your company name

                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Differentiates you and clarifies your position in the marketplace
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Builds loyalty and enthusiasm
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Allows you to charge a premium price
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Aligns your visual identity and public perception with your vision, mission, strategic priorities, and internal culture
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Creates expectation and communicates a promise of value
                                </span>
                            </p>

                        </div>
                    </div>
                </div>


                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Sites for NGO's and Govt. Agencies</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>Every company needs a website, but it’s a common misconception that a logo alone defines a brand. A logo is simply a visual identifier—it represents your brand, but it does not define it.</p>
                        <p>A brand is shaped by how people perceive your business. It reflects your quality, service, values, integrity, and the overall experience you provide to your customers.</p>
                        <p>Creating a well-designed identity system helps establish a strong visual presence and gives your brand a clear and consistent voice.</p>


                    </div>

                    {/* RIGHT SIDE IMAGE */}

                    <div className="col-lg-6 animate-right">
                        <img
                            src="/images/our-services/ngo-sites.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>

                    <div className="container">
                        <p>However, branding goes beyond visuals. Building a strong brand requires consistency, clarity, and the right strategy to define, shape, and communicate who you truly are.</p>
                        <div>
                            <h4>The benefits reaped from branding are numerous. Here are just a few:</h4>
                        </div>

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    It helps you gain sales and market share through familiarity and trust
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Results in future and current customers remembering your company name

                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Differentiates you and clarifies your position in the marketplace
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Builds loyalty and enthusiasm
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Allows you to charge a premium price
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Aligns your visual identity and public perception with your vision, mission, strategic priorities, and internal culture
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Creates expectation and communicates a promise of value
                                </span>
                            </p>

                        </div>
                    </div>
                </div>




                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6 animate-left">
                        <img
                            src="/images/our-services/website-maintenance.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>
                    <div className="col-lg-6">

                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Website Maintenance</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>TechsPAR provides high-quality and timely website maintenance services to ensure your website remains up-to-date, secure, and fully functional at all times.</p>
                        <p>As your trusted outsourcing partner, we handle the day-to-day maintenance of your website, allowing you to focus on running your business efficiently. Our team works closely with you to plan and implement regular updates, content changes, and performance improvements as needed.</p>
                        <p>Website maintenance includes updating, editing, and optimizing existing web pages to keep your content fresh, relevant, and aligned with your business goals.</p>
                    </div>

                    {/* RIGHT SIDE IMAGE */}


                    <div className="container">

                        <div>
                            <h4>Website maintenance includes:</h4>
                        </div>

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Text revisions to existing web pages
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Adding, deleting or editing graphics or photographs on the web pages
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Pricing changes
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    News
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Newsletters
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    New product and service updates
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Press releases
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Staff & personnel changes

                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Updating hyperlinks
                                </span>
                            </p>
                            <p className='text-center'>Apart from that, our programmers can even develop (CMS) software driven updates to make daily updates</p>

                        </div>
                    </div>
                </div>




                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}

                    <div className="col-lg-6">

                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Web Hosting & Domain Registration</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <h5>What we Offer</h5>
                        <p>We, at techsPAR, offer affordable services with no hidden costs.</p>

                        <h5>Domain Registration</h5>
                        <p>Domain Registration is of prime concern for any enterprise aiming to tap the immense potential of the web through a website. techsPAR, helps customers to achieve their business objectives without spending a large amount of money, which separates us from others.</p>

                    </div>

                    {/* RIGHT SIDE IMAGE */}

                    <div className="col-lg-6 animate-right">
                        <img
                            src="/images/our-services/web-hosting&domain.jpg"
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>


                    <div className="container">

                        <h5>Web Hosting</h5>
                        <p>We have a vast expertise in website management and web hosting platform invariably the most reliable one available. techsPAR offers a comprehensive spectrum of hosting services, including:</p>

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Linux hosting
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Windows hosting
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Word Press hosting
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Joomla hosting
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    E-commerce hosting
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Email Hosting
                                </span>
                            </p>
                            <p className='text-center'>Need help?</p>
                            <p className='text-center'>For further details regarding our services, please feel free to contact us at <span className='text-primary fw-bold'>info@techspar.in</span></p>

                        </div>
                    </div>
                </div>


            </div>



        </>

    );
}

export default WebSolutionsPage;
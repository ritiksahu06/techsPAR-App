import React from 'react';
import Banner from '../components/Banner';


const Events = () => {
    return (
        <>
            {/* Banner Section */}

            <Banner
                title='Event Services'
                image='/images/event-services/event-services-banner.jpg'
                breadcrumb={[
                    { name: "Home", link: "/" },
                    { name: "Event Services" }
                ]}
            />

            <div className="container">


                {/* Event Services */}
                <div className="row g-4 my-5">
                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-12">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Event Services</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>At Techspar, we have extensive experience in managing services for events and exhibitions. With years of industry expertise, we have successfully delivered solutions for large-scale events, earning the trust and confidence of our clients.</p>
                        <p>We provide complete end-to-end event solutions, starting from developing event websites with detailed information, schedules, and updates. Our services also include online registration for exhibitors, delegates, and visitors, along with on-site registration setup at the venue.</p>
                        <p>From hardware, software, and design to manpower, stationery, data entry, and reporting—we handle every aspect to ensure smooth and efficient event operations.</p>
                        <p>Keeping today’s dynamic environment in mind, we believe that “the show must go on.” Our goal is to deliver seamless execution and support at every stage of your event.</p>

                    </div>

                    {/* RIGHT SIDE IMAGE */}

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

                {/* Event Website */}
                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Event Website</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>We offer custom event website design services for exhibition and conference organizers, ensuring every element is tailored to meet specific event requirements.</p>
                        <p>An event website serves as a central source of information for attendees, providing all the essential details in one place. It also acts as a cost-effective digital platform to promote your event and reach a wider audience.</p>
                        <p>While creating an event website may seem simple, it is important to present information clearly and effectively. At Techspar, we focus on including all key details to ensure attendees are well-informed and prepared.</p>


                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-6">
                        <img
                            src='/images/event-services/event-website.jpg'
                            alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>
                    <div className="container">

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Impactful landing page with Call to action
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Eye-catching visuals and videos
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Events photo and video gallery
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Company info and contact information
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Event schedules: date and time
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Venue location/ addresses
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Social media links
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    List of Key Attendees, Agendas, Sessions, Activities
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Exhibitor / Visitor Registration Form with confirmation email
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Testimonials of Your Exhibitors / Visitors
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Sponsor / Partner Logos
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    News and post-event updates
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Subscribe with us for mailing list
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Ticket purchase and refund policy
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    FAQ Section
                                </span>
                            </p>

                        </div>
                    </div>
                </div>


                {/* Badges/Stationery/ Lanyards etc */}
                <div className="row g-4 my-5">

                    <div className="col-lg-6">
                        <img
                            src='/images/event-services/badges.jpg' alt="web"
                            className="img-fluid shadow-lg rounded"
                            style={{ height: 350, width: "100%" }}
                        />
                    </div>

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Badges/Stationery/ Lanyards etc</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>Custom and personalized lanyards and badge holders are ideal for trade shows, conventions, and corporate events. They help showcase your brand professionally during meetings and events, with a wide range of styles, colors, and features available to suit your needs.</p>
                        <p>Whether you are an executive, manager, or business owner, lanyards and card holders are essential for keeping your ID and name cards secure and well-maintained. They not only enhance your professional appearance but also protect cards from damage such as water, tears, and bending.</p>
                        <p>At Techspar, we provide a complete range of name tags, card holders, and lanyards, sourced from trusted manufacturers. As a one-stop solution, we ensure high-quality products at competitive prices to meet your event and corporate requirements.</p>

                    </div>

                    {/* RIGHT SIDE IMAGE */}


                </div>


                {/* Event Staffing */}
                <div className="row g-4 my-5">

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Event Staffing</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>We truly value our clients and believe in open communication, transparency, and high-quality customer service. At Techspar, we take care of your event staffing and management needs from start to finish, allowing you to focus on the bigger picture and achieve your event goals.</p>
                        <p>We understand that successful events require skilled and reliable staff, but finding the right people can be time-consuming and challenging. That’s why professional event staffing plays a crucial role in ensuring smooth execution.</p>
                        <p>With our expertise, we help you select the right team for your event, ensuring efficiency, professionalism, and a seamless experience for both organizers and attendees.</p>

                    </div>


                    {/* RIGHT SIDE IMAGE */}

                    <div className="col-lg-6">
                        <img
                            src='/images/event-services/event-staffing.jpg' alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>

                    <div className="container">


                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Temporary employees require management.
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Food and safety regulations must be followed perfectly.

                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Event staff training requires a large amount of dedicated time and personnel.
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    You may need back up event staff.
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Self-staffing requires a lot of paperwork.
                                </span>
                            </p>


                        </div>
                    </div>
                </div>


                {/* Exhibitor/Visitor Registration */}
                <div className="row g-4 my-5">

                    <div className="col-lg-6">
                        <img
                            src='/images/event-services/exhibitor-visitor-registration.jpg' alt="web"
                            className="img-fluid shadow-lg rounded"
                        />
                    </div>

                    {/* LEFT SIDE (LIMITED CONTENT) */}
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Exhibitor/Visitor Registration</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>

                        <p>The registration counter is the face of any event, serving as the first point of interaction for visitors at an exhibition or conference. A smooth and efficient check-in process helps maintain excitement and sets a positive tone for the entire event.</p>
                        <p>On the other hand, a slow or disorganized registration experience can create frustration and negatively impact the overall impression. With a large number of visitors arriving at the counter, it is essential to ensure a well-managed and seamless process right from the start.</p>


                    </div>

                    {/* RIGHT SIDE IMAGE */}

                    <div className="container">

                        <div className="job-list">

                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    We need to have a check list with us before we start of the registration process
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Registration Area/Counters to be identified & checked
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Look for proper Electricity, Power points, Branding & Fascia as per the requirement
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Self-staffing requires a lot of paperwork.
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Look for proper sitting arrangements with CHAIRS/ AC/ FAN/ HEATER & Water
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Security Personnel’s, Q Managers and Lockable Cupboards / Area to keep all the stuff
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    A Counter for personnel from Organizer with proper information about the Exhibition & Conference details to guide support staff
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    All Laptops, Printers, Cables etc. should be placed properly
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Proper setup of systems to be done and checked for test run
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Temp Staff to be briefed about the activity before the day starts
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Pre-Printed Stationery Badges, Sleeves, Lanyards and Visitor Forms
                                </span>
                            </p>
                            <p className="d-flex align-items-start">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                <span>
                                    Other Stationery items required are, pens, staplers with pins, scissors, rim of paper, rubber bands, file covers and envelopes etc
                                </span>
                            </p>

                            <p>A proper setup of servers and systems is essential before starting the registration process. The database of exhibitors, organizers, and other special categories is collected in advance, allowing most badges to be printed before the event, with a few kept for on-site printing.</p>
                            <p>Queue management is a critical part of any exhibition, helping visitors quickly identify the correct counters and ensuring smooth movement within the venue. This reduces waiting time and improves the overall experience.</p>

                            <div>
                                <h5>Pre-Registered Visitors:</h5>
                                <p>Pre-registered visitors can collect their badges from designated self-printing kiosks using their QR or barcode. If they do not have their code, ushers can assist by searching via visitor ID, mobile number, or company name. Kiosks can also be set up for fully self-service badge printing.</p>
                            </div>

                            <div>
                                <h5>On-Spot Registration:</h5>
                                <p>Visitors registering on-site can fill in their details digitally, including name, company, designation, contact information, and area of interest. Badges are printed instantly and provided along with lanyards. All collected data is later compiled and shared with the organizers.</p>
                            </div>

                            <div>
                                <h5>Self-Service Registration:</h5>
                                <p>Visitors can register using their mobile devices by accessing a URL or scanning a QR code at the venue. After submitting their details, they receive a confirmation with a QR code for quick check-in and badge printing.</p>
                            </div>

                            <div>
                                <h5>Badge Scanning:</h5>
                                <p>At entry points, badges are scanned using QR or barcode scanners to track visitor data. This information is recorded daily and compiled for analysis.</p>
                            </div>

                            <div>
                                <h5>Post-Event Reports:</h5>
                                <p>After the event, all visitor data is organized and shared with the organizers. Detailed reports can also be generated to help analyze event performance and visitor insights.</p>
                            </div>


                        </div>
                    </div>
                </div>




               

            </div>



        </>
    );
}

export default Events;

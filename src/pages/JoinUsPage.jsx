import { useState } from "react";
import Banner from '../components/Banner';

const JoinUsPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        message: "",
        cv: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // handle file separately
        if (name === "cv") {
            setFormData({ ...formData, cv: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("position", formData.position);
        data.append("message", formData.message);
        data.append("cv", formData.cv);

        console.log("Submitted Data:", formData);

        // Example API call
        // fetch("your-api-url", {
        //   method: "POST",
        //   body: data,
        // });

        // reset form
        setFormData({
            name: "",
            email: "",
            position: "",
            message: "",
            cv: null
        });

        alert("Form submitted successfully ✅");

    };

    return (
        <div>
            {/* Banner Section */}
            <Banner title='Join Us' image='./images/join-us-banner.jpg' breadcrumb={[
                { name: "Home", link: "/" },
                { name: "Join Us" }
            ]} />

            <div className="container">
                <div className="row g-4 my-5">
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Contact Us</h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <p>Our employees share what makes TechsPAR a great place to work. Join us to innovate and grow.</p>
                        <p>Discover why TechsPAR is a great place to work. Be part of exciting and impactful projects.</p>
                        <p>Hear from our team about life at TechsPAR. Innovate, grow, and build amazing projects with us.</p>
                        <p>At TechsPAR, we create, innovate, and grow together. Join us and make an impact.</p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src={`./images/join-us.png`}
                            alt="gallery"
                            // style={{objectFit: 'cover'}}
                            className="img-fluid shadow-lg custom-img"
                        />
                    </div>
                </div>


                <div className="row my-5">

                    <div className="col-lg-6">
                        <img
                            src={`./images/innovate-with-us.png`}
                            alt="gallery"
                            // style={{objectFit: 'cover'}}
                            className="img-fluid shadow-lg custom-img"
                        />
                    </div>

                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Come innovate With Us
                            </h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <p>Let’s work together to innovate and solve some of the most challenging problems faced by industries and organizations. Together, we can reinvent ourselves, transform the way work is done, and create smarter, more efficient solutions that drive real impact. By combining creativity, technology, and collaboration, we aim to build a better and more connected world.</p>
                    </div>

                </div>


                <div className="row g-4 my-5 ">

                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">Join Our Team
                            </h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <p>If you are a fresher and have a knowledge of PHP or have a little experience, drop us your CV.

                            We are looking out for a professional to join our team. Young, Energetic, Talented & Humble individual with outstanding organisational skills and a strong desire to maintain our high standards of customer service.</p>
                        <div className="job-list">
                            <p><i className="bi bi-check-circle-fill text-primary me-2"></i>PHP Developer</p>
                            <p><i className="bi bi-check-circle-fill text-primary me-2"></i>Sales and Marketing</p>
                            <p><i className="bi bi-check-circle-fill text-primary me-2"></i>Web Designer</p>
                            <p><i className="bi bi-check-circle-fill text-primary me-2"></i>Tele-Marketing Executive</p>
                        </div>
                    </div>



                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h2 className="fw-bold">APPLY NOW
                            </h2>
                            <div className="loader mx-auto mt-3"></div>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="row g-3">

                                {/* Name */}
                                <div className="col-md-6">
                                    <label>Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control border border-primary"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="col-md-6">
                                    <label>Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control border-primary"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                {/* Position */}
                                <div className="col-md-6">
                                    <label>Position*</label>
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="form-control border border-primary"
                                        placeholder="Position you are applying for"
                                        required
                                    />
                                </div>

                                {/* CV Upload */}
                                <div className="col-md-6">
                                    <label>Upload CV*</label>
                                    <input
                                        type="file"
                                        name="cv"
                                        onChange={handleChange}
                                        className="form-control border-primary"
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="col-12">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-control border-primary"
                                        rows="4"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <div className="col-12 text-center text-lg-start">
                                    <button className="btn btn-outline-pink px-4">
                                        Submit Application
                                    </button>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default JoinUsPage;

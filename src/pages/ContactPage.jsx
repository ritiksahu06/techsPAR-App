import { useState } from "react";
import Banner from "../components/Banner";

const ContactPage = () => {



  let [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    setFormData(
      {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    )
  };

  return (
    <div>
      {/* Banner Section */}
      <Banner title='Contact Us' image='./images/contact-us-banner.png' breadcrumb={[
        { name: "Home", link: "/" },
        { name: "Contact Us" }
      ]} />
      <div className="contact-section container-lg py-5">

        {/* Heading */}
        <div className="text-center mb-3">
          <h2 className="fw-bold">Contact Us</h2>
          <div className="loader mx-auto mt-3"></div>
        </div>

        <div className="row g-4">
          {/* SOCIAL ICONS */}
          <div className="col-lg-2 col-5 social-wrapper d-flex p-5 justify-content-center">
            <div className="social-icons-vertical d-flex flex-column p-1">
              <a href="#" className="mt-2" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="#" className="mt-2" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="#" className="mt-2" target="_blank"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="mt-2" target="_blank"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="mt-2" target="_blank"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Left Side - Contact Info */}
          <div className="col-7 col-lg-3">
            <div className="contact-card p-5 h-100 d-flex flex-column justify-content-between">

              <div>
                <h5 className="">Contact Information</h5>

                <p><strong>📍 Address:</strong><br />
                  506 Suneja Tower - I, District Center Janakpuri, New Delhi- 110058, INDIA
                </p>

                <p><strong>📞 Phone:</strong><br />
                  +91 9876543210
                </p>

                <p><strong>📧 Email:</strong><br />
                  info@techspar.com
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-12 col-lg-7">

            <div className="contact-card p-4">

              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label>Name*</label>
                    <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-control border border-primary" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6">
                    <label>Email*</label>
                    <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-control border-primary" placeholder="Your Email" required />
                  </div>

                  <div className="col-12">
                    <label>Subject*</label>
                    <input type="text" name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-control border-primary" placeholder="Subject" />
                  </div>

                  <div className="col-12">
                    <label>Message*</label>
                    <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="form-control border-primary" rows="3" placeholder="Your Message"></textarea>
                  </div>

                  <div className="col-12 text-center text-lg-start">
                    <button className="btn btn-outline-pink px-4">
                      Send Message
                    </button>
                  </div>

                </div>

              </form>

            </div>




          </div>

          <div className="map-container">
            {/* <iframe
              src="https://www.google.com/maps?q=Janakpuri+District+Center+New+Delhi&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8979718584!2d77.0441749!3d28.6273928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05f90d56d5a5%3A0x7a4b6ada7cf8f113!2stechPAR%20Solutions!5e0!3m2!1sen!2sin!4v1710000000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactPage;
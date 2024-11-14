import { contactData, profileData } from "@/constants";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>{contactData.mainSummary}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className={contactData.phone ? "col-lg-4" : "col-lg-6"} >
            <div className="box-shadow info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>{profileData.address}</p>
            </div>
          </div>

          {contactData.phone && <div className="col-lg-4">
            <div className="box-shadow info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-telephone"></i>
              <h3>Call</h3>
              <p>{contactData.phone}</p>
            </div>
          </div>}

          <div className={contactData.phone ? "col-lg-4" : "col-lg-6"} >
            <div className="box-shadow info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>{contactData.email}</p>
            </div>
          </div>

        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="400">
            <div className="box-shadow">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;

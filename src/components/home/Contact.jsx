import { contactData } from "@/constants/constant";


const ContactOld = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>{contactData.mainSummary}</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>{contactData.address}</p>
              </div>
            </div>

            {contactData.phone && <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call</h3>
                <p>{contactData.phone}</p>
              </div>
            </div>}

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email</h3>
                <p>{contactData.email}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};


const ContactForm = () => {
  return (
    <form
      action="forms/contact.php"
      method="post"
      className="email-form"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            className="form-control"
            name="message"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="col-md-12 text-center">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>

          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  )
}


const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>{contactData.mainSummary}</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{contactData.address}</p>
                </div>
              </div>
            </div>

            {contactData.phone && <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call</h3>
                  <p>{contactData.phone}</p>
                </div>
              </div>
            </div>}

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>{contactData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="email-form-shadow" data-aos="fade-up" data-aos-delay="300" >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};



export default Contact;

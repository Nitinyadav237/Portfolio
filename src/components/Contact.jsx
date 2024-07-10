
function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't hesitate to reach out! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-map-location-dot" style={{ color: "#1864e7"}} ></i>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Chennai,India</p>
                </div>
              </div>


              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-envelope-open-text"  style={{ color: "#1864e7"}} ></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:nitin.yadav.ny237@gmail.com">
                  nitin.yadav.ny237@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

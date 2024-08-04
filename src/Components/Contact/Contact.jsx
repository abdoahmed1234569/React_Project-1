import './Contact.css'

export default function Contact() {
  return (
    <div className="contact d-flex align-items-center">
      <div className="container">
        <div className="info p-5 text-center">
          <h2 className="text-uppercase">contact section</h2>
          <span className="position-relative">
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="row">
          <form>
            <div className="col-12 col-md-6 mx-auto">
              <input
                type="text"
                placeholder="userName"
                className="form-control border-0 border-bottom"
              />
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <input
                type="number"
                placeholder="userAge"
                className="form-control border-0 border-bottom"
              />
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <input
                type="email"
                placeholder="userEmail"
                className="form-control border-0 border-bottom"
              />
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <input
                type="password"
                placeholder="userPassword"
                className="form-control border-0 border-bottom"
              />
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <button className="btn text-white mb-5">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

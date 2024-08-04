import './Footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="info text-center text-white mb-5">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="info text-center text-white mb-5">
              <h2>AROUND THE WEB</h2>
              <div className="socials">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="info text-center text-white">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white text-center p-4">
        Copyright © Your Website 2021
      </footer>
    </div>
  );
}

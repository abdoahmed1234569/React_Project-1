import './Portfolio.css'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
export default function Portfolio() {
  return (
    <div className="portfolio d-flex align-items-center">
      <div className="container">
        <div className="info p-5 text-center">
          <h2 className="text-uppercase">portfolio component</h2>
          <span className="position-relative">
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="row mb-5 gy-5">
          <div className="col-md-4">
            <div
              className="overlay position-relative"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={port1} alt="port1" className="img-fluid rounded-3" />
              <div className="content position-absolute top-50 start-50 translate-middle w-100 h-100 text-white d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header rounded-0 bg-transparent">
                    <img src={port1} alt="port1" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="overlay position-relative"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <img src={port2} alt="port2" className="img-fluid rounded-3" />
              <div className="content position-absolute top-50 start-50 translate-middle w-100 h-100 text-white d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header rounded-0 bg-transparent">
                    <img src={port2} alt="port2" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="overlay position-relative"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              <img src={port3} alt="port3" className="img-fluid rounded-3" />
              <div className="content position-absolute top-50 start-50 translate-middle w-100 h-100 text-white d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="overlay position-relative"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={port1} alt="port1" className="img-fluid rounded-3" />
              <div className="content position-absolute top-50 start-50 translate-middle w-100 h-100 text-white d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header rounded-0 bg-transparent">
                    <img src={port3} alt="port3" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="overlay position-relative"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <img src={port2} alt="port2" className="img-fluid rounded-3" />
              <div className="content position-absolute top-50 start-50 translate-middle w-100 h-100 text-white d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header rounded-0 bg-transparent">
                    <img src={port1} alt="port1" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="overlay position-relative"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              <img src={port3} alt="port3" className="img-fluid rounded-3" />
              <div className="content position-absolute top-50 start-50 translate-middle w-100 h-100 text-white d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header rounded-0 bg-transparent">
                    <img src={port3} alt="port3" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

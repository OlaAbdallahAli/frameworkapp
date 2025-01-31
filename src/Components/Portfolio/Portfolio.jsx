import port1 from "../../assets/images/port1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="pt-4">
        <div className=" container  p-5">
          <h2 className="text-uppercase h1 position-relative py-1">
            portfolio component
          </h2>
          <div className="lineStars d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <svg
              className=" mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="30px"
              width="30px"
              fill="#2c3e50"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <div className="line ms-3"></div>
          </div>
          <div className="container mt-5">
            <div className="row flex-wrap g-5">
              <div className="  col-md-6 col-lg-4">
                <div className="  position-relative overflow-hidden rounded-3">
                  <img src={port1} alt="Image" className="w-100 rounded-3" />
                  <div
                    className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#imageExample"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="50px"
                      width="50px"
                      fill="white"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                  <div
                    className="modal fade"
                    id="imageExample"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-body ">
                        <img
                          src={port1}
                          className="d-block w-100"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  col-md-6 col-lg-4">
                <div className=" position-relative overflow-hidden rounded-3">
                  <img src={port2} alt="" className="w-100 rounded-3" />
                  <div
                    className="layer w-100  h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#imageExample2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="50px"
                      width="50px"
                      fill="white"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                  <div
                    className="modal fade "
                    id="imageExample2"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-body ">
                        <img
                          src={port2}
                          className="d-block w-100"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  col-md-6 col-lg-4">
                <div className="  position-relative overflow-hidden rounded-3">
                  <img src={port3} alt="" className="w-100 rounded-3" />
                  <div
                    className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#imageExample3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="50px"
                      width="50px"
                      fill="white"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                  <div
                    className="modal fade"
                    id="imageExample3"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-body ">
                        <img
                          src={port3}
                          className="d-block w-100"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  col-md-6 col-lg-4">
                <div className="  position-relative overflow-hidden rounded-3">
                  <img src={port1} alt="" className="w-100 rounded-3" />
                  <div
                    className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#imageExample"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="50px"
                      width="50px"
                      fill="white"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                  <div
                    className="modal fade"
                    id="imageExample"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-body ">
                        <img
                          src={port1}
                          className="d-block w-100"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="  position-relative overflow-hidden rounded-3">
                  <img src={port2} alt="" className="w-100 rounded-3" />
                  <div
                    className="layer w-100  h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#imageExample2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="50px"
                      width="50px"
                      fill="white"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                  <div
                    className="modal fade"
                    id="imageExample2"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-body ">
                        <img
                          src={port2}
                          className="d-block w-100"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className=" position-relative overflow-hidden rounded-3">
                  <img src={port3} alt="" className="w-100 rounded-3" />
                  <div
                    className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#imageExample3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="50px"
                      width="50px"
                      fill="white"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                  <div
                    className="modal fade"
                    id="imageExample3"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-body ">
                        <img
                          src={port1}
                          className="d-block w-100"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <div id="About" className="pt-4">
        <div className=" container text-white p-5">
          <h2 className="text-uppercase h1 position-relative py-1">
            about component
          </h2>
          <div className="lineStars d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <svg
              className=" mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="30px"
              width="30px"
              fill="white"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <div className="line ms-3"></div>
          </div>

          <div className="row p-5">
            <div className="col-md-6 text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6 text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

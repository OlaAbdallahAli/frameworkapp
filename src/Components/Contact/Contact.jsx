export default function Contact() {
  return (
    <>
      <div id="portfolio" className="pt-4">
        <div className=" container  p-5">
          <h2 className="text-uppercase h1 position-relative py-1">
            Contact component
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
          <form className=" w-75 mx-auto">
            <input
              type="text"
              placeholder="userName"
              className=" border-0 border-bottom form-control  py-3"
            />
            <input
              type="text"
              placeholder="userAge"
              className=" border-0 border-bottom form-control  py-3"
            />
            <input
              type="email"
              placeholder="userEmail"
              className=" border-0 border-bottom form-control  py-3"
            />
            <input
              type="password"
              placeholder="userPassword"
              className=" border-0 border-bottom form-control  py-3"
            />
            <button type="submit" className="btn msg mx-0 mt-4 text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

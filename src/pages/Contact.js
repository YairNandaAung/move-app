import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-6">
            <h3 className="mb-5 my-5">Contact Us</h3>
            <div className="divider3"></div>
            <div className="row">
              <div className="col-md-2">
                <div className="contact-detail">
                  <svg
                    className="contact-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>Our Location</strong>
                </h5>
                <p>
                  No.584,Shwe Gant Kaw 4st,55 Quarter <br />
                  South Dagon Township,Yangon,Myanmar
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-2">
                <div className="contact-detail">
                  <svg
                    class="contact-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-md-10 ">
                <h5>
                  <strong>Phone Number</strong>
                </h5>
                <p>+959769337567</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-2">
                <div className="contact-detail">
                  <svg
                    className="contact-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-md-10 ">
                <h5>
                  <strong>Emial Address</strong>
                </h5>
                <p>
                  yairlay2005@gmail.com <br />
                  yairnandaaung10@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 my-5 ">
            <div className="card shadow">
              <div className="card-body p-4 bg-dark">
                <form action="" className="form-group">
                  <div class="mb-3">
                    <input
                      type="email"
                      className="form-control p-2"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control p-2"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      className="form-control p-2"
                      id="exampleFormControlInput1"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control p-3"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn  contact-btn" type="button">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

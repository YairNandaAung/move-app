import React from 'react'
import './footer.css'

export default function Footer() {
  return (
<div className="container ">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Session</h5>
        <div className='devider3'></div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 mt-4"><a href="#" className="nav-link1 text-white p-0 my-2">About us</a></li>
          <li className="nav-item mb-2 footer-text"><a href="#" className="nav-link1 text-white p-0 my-2">Our services</a></li>
          <li className="nav-item mb-2 footer-text"><a href="#" className="nav-link1 p-0 text-white my-2">Privacy Policy</a></li>
          <li className="nav-item mb-2 footer-text"><a href="#" className="nav-link1 text-white p-0 my-2">Affiliate Program</a></li>
          <li className="nav-item mb-2 footer-text"><a href="#" className="nav-link1 text-white p-0 my-2">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Get help</h5>
        <div className='devider3'></div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 mt-4"><a href="#" className="nav-link1 p-0 text-white">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Return</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Design</h5>
        <div className='devider3'></div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 mt-4"><a href="#" className="nav-link1 p-0 text-white">Web Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Landing Website Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Responsive Web Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Mobile App Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link1 p-0 text-white">Rebranding</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-danger" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</div>
  )
}

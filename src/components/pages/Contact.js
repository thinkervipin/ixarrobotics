import React from 'react'
import '../../App.css'
import emailjs from 'emailjs-com'
import Footer from '../Footer'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const notify = () => toast("Sending....");
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_u71d037', e.target, 'user_Laopcfcr7Jrs4mhYOGItr')
      .then((result) => {
        console.log(result.text);
        toast.success('Send Successfull', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, (error) => {
        console.log(error.text);
        toast.error(error.text);
        toast.warn('Error', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    e.target.reset()

  }

  return (
    <>


     <ToastContainer/>
 
    

      
      
     
      
      <section className="page-section" id="contact">
      
 
                                 
                                <img src="./images/contact.png"  class="image-fluid"alt="home.jpg"
                                width="100%"/>
                                   



        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase" style={{padding:"2% 0px 0px 0px"}}>Contact Us</h2>
            <h3 className="section-subheading text-muted" style={{padding:"0px 0px  7px 0px"}}>We will get back to you as soon as possible</h3>
          </div>
          <form id="contactForm" name="sentMessage" onSubmit={sendEmail}>
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." name="name" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." name="email" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." name="phone" />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." name="message"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="text-center">
           
              <div id="success"></div>
              <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit" onClick={notify}>Send Message</button>
               <ToastContainer/>
              
            </div>
          </form>
        </div>
      </section>



      



      
    </>
  )
}
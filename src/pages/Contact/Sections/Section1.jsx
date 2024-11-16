import "./Section1.css";

export default function Section1() {
  return (
    <div className="contactSec1">
  
 
        {/* Forn */}
        <div className="contactSec1-form my-5 d-flex flex-column gap-4">
            
            {/* First Name and Last Name */}
            <div className="nameData">
                <div className="contactSec1-name">
                    <label htmlFor="firstname">
                        <h4>
                            First Name
                        </h4>
                    </label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name"/>   
                </div>
                <div className="contactSec1-name">
                    <label htmlFor="lastname">
                        <h4>
                            Last Name
                        </h4>
                    </label>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" />   
                </div>
            </div>

            {/* Email and Contact */}
            <div className="nameData">
                <div className="contactSec1-name">
                    <label htmlFor="msg">
                        <h4>
                            Email
                        </h4>
                    </label>
                    <input type="email" name="email" id="email" placeholder="Email"/>   
                </div>
                <div className="contactSec1-name">
                    <label htmlFor="lastname">
                        <h4>
                            Phone Number
                        </h4>
                    </label>
                    <input type="text" name="phone" id="phone" placeholder="Phone Number" />   
                </div>
            </div>

            {/* Text Area */}
            <div className="textArea">
                <div className="contactSec1-msg">
                    <label htmlFor="msg">
                        <h4>
                            Message
                        </h4>
                    </label>
                    <textarea type="msg" rows="5" cols="5" name="msg" id="msg" placeholder="Message"/>   
                </div>
            </div>

            <button>
                Send Message
            </button>

        </div>    
    </div>
  )
}

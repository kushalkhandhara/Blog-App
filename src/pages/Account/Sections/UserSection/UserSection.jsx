import "./UserSection.css";
import userImg from "../../../../assets/user/Kushal.jpg";
 

export default function UserSection() {
  return (
    <div className="userSection mt-5">
        
        {/* User Profile */}
        <div className="profile">
            <div className="profileImg">
                <img src={userImg} alt="Error"/>
            </div>
            <div className="profile-header">
                <h5>Kushal Khandhara</h5>
                <h6>knk@gmail.com</h6>
            </div>
        </div>

        {/* User Data */}
        <div className="profileInp mt-5">
            {/* Name and lastname */}
            <div className="profileInp-data">
                
                <div className="profileInp">
                    <h6>First Name</h6>
                    <input type="text" name="name" placeholder="Your First Name"/>
                </div>
                <div className="profileInp">
                    <h6>Last Name</h6>
                    <input type="text" name="name" placeholder="Your Last Name"/>
                </div>

            </div>

            {/* Email and Country */}
            <div className="profileInp-data">
                <div className="profileInp">
                    <h6>Email</h6>
                    <input type="email" name="email" placeholder="Your Email"/>
                </div>
                <div className="profileInp">
                    <h6>Country</h6>
                    <input type="text" name="" placeholder="Your Country"/>
                </div>
            </div>

            {/* File */}
            <div className="profileInp-data">
                <div className="profileInp">
                    <h6>Profile Image</h6>
                    <input type="file" name="profileImg" placeholder="Your Profile Image"/>
                </div>
 
            </div>
        </div>

        <div className="profileInp-button mt-4">
            <button className="py-2 px-3  ">Edit Profile</button>
        </div>

        


    </div>
  )
}

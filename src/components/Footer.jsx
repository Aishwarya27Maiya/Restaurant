 
import {assets} from "../assets/assets.js"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>fvcdyhsgcfs hsvdcf,ksfc gcdycf sgdiyesf dfieyhgf deufghre degyuf gferugh gfuf gfiyrfkhvn fgderyfgherog dcdvf dbdhf deyfg deyhf dbvewhy fbrdj fvcdyhsgcfs hsvdcf,ksfc gcdycf sgdiyesf dfieyhgf deufghre degyuf gferugh gfuf gfiyrfkhvn fgderyfgherog dcdvf .
                </p>
                <div className="footer-content-icons">
                    <img src={assets.facebook_icon} alt="fb"/>
                    <img src={assets.twitter_icon} alt="twitter"/>
                </div>
            </div>
            <div className="footer-content-middle">
                <h2>Sections</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Sign In</li>
                    <li>Privary Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>Contact:9448057169</li>
                    <li>Email:tomato@gmail.com</li>
                    <li>Address:312 Gates Dr Milpitas CA 95035</li>
                </ul>
            </div>
        </div>
      <p className="footer-copyright">Copyright 2026 Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer

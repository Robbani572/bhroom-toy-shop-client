import { FaCopyright, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/images/bhrom-logo1.png'

const Footer = () => {
    return (
        <footer className="p-10 bg-base-200 text-base-content max-w-7xl container mx-auto">
            <div className='footer'>
            <div>
                <img src={logo} alt="Bhroom Shop" />
            </div>
            <div>
                <span className="footer-title">Contact information</span>
                <p>Email: <a className="link link-hover"></a>bhroom@shop.com</p>
                <p>Telephone: <a className="link link-hover">+990125446</a></p>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Social media</span>
                <a href='https://www.facebook.com/profile.php?id=100026518968128' className="link link-hover flex items-center gap-2 text-blue-600"><FaFacebookF></FaFacebookF> Facebook</a>
                <a href='https://twitter.com/Robbani97571025' className="link link-hover flex items-center gap-2 text-blue-600"><FaTwitter></FaTwitter> Twitter</a>
                <a href='https://www.instagram.com/robbani571/' className="link link-hover flex items-center gap-2 text-red-600"><FaInstagram></FaInstagram> Instagaram</a>
                <a href='https://www.linkedin.com/in/golam-robbani-1b7769248/' className="link link-hover flex items-center gap-2 text-blue-600"><FaLinkedin></FaLinkedin> Linkedin</a>
            </div>
            <div>
                <span className="footer-title">Address</span>
                <a className="link link-hover">Main Brance(New York, 401 road)</a>
            </div>
            </div>
            <p className='flex items-center font-bold justify-center gap-4 mt-10'>All Copyright <FaCopyright className='w-6'></FaCopyright> By <img className='w-32' src={logo} alt="" /> || 2023 </p>
        </footer>
    );
};

export default Footer;
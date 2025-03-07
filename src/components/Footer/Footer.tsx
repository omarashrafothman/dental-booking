import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-light py-5 border-top">
            <div className="container">
                <div className="row">


                    <div className="col-md-4">
                        <h5 className="fw-bold">Subscribe to our Newsletter</h5>
                        <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <h5 className="fw-bold">Menu</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">About</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Services</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Blog</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h5 className="fw-bold">Utility Pages</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Style Guide</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Password Protected</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark">404 Not Found</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h5 className="fw-bold">Contact</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><MdEmail className="text-primary" />omarashrafothman1234@gmail.com</li>
                            <li className="mb-2"><MdPhone className="text-primary" />+201552242010</li>
                            <li className="mb-2"><MdLocationOn className="text-primary" /> 7 omar elmokhtar st, cairo,  EGYPT</li>
                        </ul>
                    </div>

                </div>


                <div className="text-center mt-4">
                    <div className="d-flex justify-content-center mb-5 gap-4 ">
                        <Link href="#"> <FaFacebookF className="mx-2 text-primary" /></Link>
                        <Link href="#">  <FaTwitter className="mx-2 text-primary" /></Link>
                        <Link href="#"> <FaInstagram className="mx-2 text-primary" /></Link>
                        <Link href="#">  <FaLinkedinIn className="mx-2 text-primary" /></Link>
                        <Link href="#"> <FaYoutube className="mx-2 text-primary" /></Link>
                        <Link href="#"><FaTelegram className="mx-2 text-primary" /></Link>
                    </div>
                    <p className="text-muted">
                        Copyright © Dentist | Developed by <Link href="https://omarashrafothman-portfolio.vercel.app/" target="_blank" className="text-primary">Omar Othman</Link> | Powered by <Link href="https://elkood.com/" className="text-primary" target="_blank">Elkood</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

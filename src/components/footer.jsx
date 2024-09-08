import logo from '../assets/logo.png';
import { Separator } from "@/components/ui/separator";

function Footer() {
    return (
        <div className="bg-amber-800 bg-opacity-20 p-10">
            <div className="flex flex-row justify-center gap-10 xl:gap-24 lg:gap-20 md:gap-16">
                <div className="justify-start hidden md:block lg:block xl:block">
                    <img className="w-32 h-32" src={logo} alt="Logo" />
                </div>
                <div className='grid'>
                    <p className="md:text-xl font-semibold">PRIVACY</p>
                    <ul className="md:text-xl">
                        <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>
                <div className='grid'>
                    <p className="md:text-xl font-semibold">SERVICES</p>
                    <ul className="md:text-xl">
                        <li><a href="/services" className="hover:underline">Our Services</a></li>
                        <li><a href="/support" className="hover:underline ">Customer Support</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>
                <div className='grid'>
                    <p className="md:text-xl font-semibold">SOCIAL MEDIA</p>
                    <div className="sm:flex grid gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1DA1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

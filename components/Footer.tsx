import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const year = new Date().getFullYear();
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-8">
				<div className="px-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-3">
							Kaladhaara
						</p>
						<div className="flex gap-6 pb-5">
                        <Link href="https://www.instagram.com/kaladhaara_arts_academy/" target="_blank" className="mx-2">
                            <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-red-600 rounded-lg p-2 flex justify-center items-center cursor-pointer">
                            <FontAwesomeIcon icon={faInstagram} color='white'/>
                            </div>
                        </Link>
                        <Link href="https://www.facebook.com/Kaladhaara" target="_blank" className="mx-2">
                        <div className="bg-blue-600 rounded-lg p-2 flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} color="white"/>
                        </div>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCtlYWV3SmKg-CXTQyzwh6ag" target="_blank" className="mx-2">
                            <div className="bg-red-600 rounded-lg p-2 flex justify-center items-center cursor-pointer">
                            <FontAwesomeIcon icon={faYoutube} color="white"/>
                            </div>
                        </Link>
						</div>
					</ul>
				</div>

				<div className="px-5">
					<ul>
						<p className="text-gray-800 font-bold text-xl pb-4">About</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/about/kaladhaara">Kaladhaara</Link>
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/about/team">Our team</Link>
						</li>

					</ul>
				</div>
                <div className="px-5">
					<ul>
						<p className="text-gray-800 font-bold text-xl pb-4">Facility</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href="/facility/locations">Our Locations</Link>
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <Link href="/facility/schedule" >Schedule</Link>
						</li>

					</ul>
				</div>

				<div className="px-5">
					<ul>
						<p className="text-gray-800 font-bold text-xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href="/contact" >Contact</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center py-2 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© {year} All rights reserved
				</h1>
			</div>
		</>
	);
}

export default Footer;
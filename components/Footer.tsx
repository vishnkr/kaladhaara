import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    const year = new Date().getFullYear();
    return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-orange-400 py-6">
        <div className="font-semibold text-center">
        Copyright {year} © - kaladhaara.org
        </div>
        <div className='flex text-white justify-center py-2'>
            <Link href="https://www.instagram.com/kaladhaara_arts_academy/" target="_blank" className="mx-2">
                <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-red-600 to-yellow-600 rounded-full p-2 flex justify-center items-center cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
                </div>
            </Link>
            <Link href="https://www.facebook.com/Kaladhaara" target="_blank" className="mx-2">
                <div className="bg-blue-600 rounded-full p-2 flex justify-center items-center cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />
                </div>
            </Link>
            <Link href="https://www.youtube.com/channel/UCtlYWV3SmKg-CXTQyzwh6ag" target="_blank" className="mx-2">
                <div className="bg-red-600 rounded-full p-2 flex justify-center items-center cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} />
                </div>
            </Link>
        </div>
    </footer>)
}
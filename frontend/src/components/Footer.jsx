import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div >
                <img src={assets.logo} className='mb-5 w-35' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Daftar is a platform designed to simplify registration, listings, and sign-ups. Whether you're managing events, collecting data, or organizing members, Daftar streamlines the process for an efficient and user-friendly experience.
                </p>
            </div>
            <div>
              <p className='text-xl font-medium mb-5 mt-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-medium mb-5 mt-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9713211600</li>
                <li>daftarbyambica@gmail.com</li>
              </ul>
            </div>
        </div>
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ daftarbyambica- All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer



// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { assets } from '../assets/assets';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6 w-full">
//       {/* Centered container with constrained width */}
//       <div className="max-w-md mx-auto">
//         <div className="flex flex-col items-center justify-center space-y-6 px-4">
//           {/* Social Media Icons */}
//           <div className="flex space-x-6">
//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-500 transition-colors duration-300"
//             >
//               <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
//             </a>

//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-500 transition-colors duration-300"
//             >
//               <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
//             </a>

//             {/* WhatsApp */}
//             <a
//               href="https://wa.me/yourphonenumber"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-500 transition-colors duration-300"
//             >
//               <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:youremail@example.com"
//               className="hover:text-red-500 transition-colors duration-300"
//             >
//               <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
//             </a>
//           </div>

//           {/* Footer Text and Logo */}
//           <div className="text-center">
//             <p className="text-sm">
//               © {new Date().getFullYear()} Daftar By Ambica. All rights reserved.
//             </p>z
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
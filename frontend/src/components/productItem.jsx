import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image,name,price}) => {
    const{currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out'src={image[0]} alt="" />
            
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem



// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
//     const { currency } = useContext(ShopContext);

//     return (
//         <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
//             <div className="relative w-full pt-[100%] overflow-hidden">
//                 <img
//                     className="absolute top-0 left-0 w-full h-full object-cover hover:scale-110 transition ease-in-out"
//                     src={image[0]}
//                     alt={name}
//                 />
//             </div>
//             <p className="pt-3 pb-1 text-sm">{name}</p>
//             <p className="text-sm font-medium">
//                 {currency}
//                 {price}
//             </p>
//         </Link>
//     );
// };

// export default ProductItem;








// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
//     const { currency } = useContext(ShopContext);

//     return (
//         <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
//             <div className="relative w-full pt-[100%] overflow-hidden">
//                 <img
//                     className="absolute top-0 left-0 w-full h-full object-cover hover:scale-110 transition ease-in-out"
//                     src={image[0]}
//                     alt={name}
//                 />
//             </div>
//             <p className="pt-3 pb-1 text-sm">{name}</p>
//             <p className="text-sm font-medium">
//                 {currency}
//                 {price}
//             </p>
//         </Link>
//     );
// };

// export default ProductItem;











// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom';

// const ProductItem = ({id, image, name, price}) => {
//     const {currency} = useContext(ShopContext);
    
//     return (
//         <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//             {/* Debug container - add these classes */}
//             <div className='overflow-hidden min-h-[200px] bg-gray-100 border border-red-500'>
//                 <img 
//                     className='w-full h-full object-cover border border-blue-500'
//                     src={Array.isArray(image) ? image[0] : image}
//                     alt={name}
//                     onError={(e) => {
//                         console.error('Image failed to load:', image);
//                         e.target.src = 'https://via.placeholder.com/300'; // Fallback
//                     }}
//                 />
//             </div>
//             <p className='pt-3 pb-1 text-sm'>{name}</p>
//             <p className='text-sm font-medium'>{currency}{price}</p>
//         </Link>
//     )
// }

// export default ProductItem



// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';

// const ProductItem = ({id, image, name, price}) => {
//   const {currency} = useContext(ShopContext);
//   const [imgError, setImgError] = useState(false);
  
//   return (
//     <Link className='text-gray-700 cursor-pointer block group' to={`/product/${id}`}>
//       <div className='overflow-hidden aspect-square bg-gray-100 rounded-md relative'>
//         {imgError ? (
//           <div className='w-full h-full flex items-center justify-center bg-gray-200'>
//             <span className='text-gray-500'>Image not available</span>
//           </div>
//         ) : (
//           <img 
//             className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
//             src={image} 
//             alt={name}
//             onError={() => {
//               console.error('Image failed to load:', image);
//               setImgError(true);
//             }}
//             onLoad={() => console.log('Image loaded successfully:', image)}
//           />
//         )}
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className='text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   );
// };

// export default ProductItem;
















// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);
//   const [imgError, setImgError] = useState(false);
  
//   // Get first image or fallback
//   const imgUrl = Array.isArray(image) ? image[0] : image;
//   const fallbackUrl = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86';

//   return (
//     <Link 
//       className='text-gray-700 cursor-pointer block group relative'
//       to={`/product/${id}`}
//     >
//       {/* Image container */}
//       <div className='overflow-hidden aspect-square bg-gray-100 rounded-md mb-2'>
//         {imgError ? (
//           <div className='w-full h-full flex items-center justify-center bg-gray-200'>
//             <span className='text-gray-500 text-xs'>Image not available</span>
//           </div>
//         ) : (
//           <img 
//             className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
//             src={imgUrl || fallbackUrl}
//             alt={name}
//             onError={() => {
//               console.error('Failed to load:', imgUrl);
//               setImgError(true);
//             }}
//             onLoad={() => console.log('Loaded:', imgUrl)}
//             loading='lazy'
//           />
//         )}
//       </div>
      
//       {/* Product info */}
//       <p className='pt-1 pb-1 text-sm font-medium line-clamp-2'>{name}</p>
//       <p className='text-sm font-bold'>{currency}{price}</p>
//     </Link>
//   );
// };

// export default ProductItem;








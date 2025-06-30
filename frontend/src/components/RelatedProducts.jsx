// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './productItem';

// const RelatedProducts = (category, subCategory) => {
//     const {products} = useContext(ShopContext);
//     const [related, setRelated] = useState('');

//     useEffect(()=>{
//         if(products.length > 0){
//             let productsCopy = products.slice();
//             productsCopy = productsCopy.filter((item)=> category === item.category);
//             productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

//             setRelated(productsCopy.slice(0,5));
//         }
//     },[products])

//   return (
//     <div className='my-24'>
//         <div className='text-center text-3xl py-2'>
//             <Title text1={'RELATED'} text2={'PRODUCTS'}/>
//         </div>
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid:cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
//             {related.map((item,index)=>(
//                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
//             ))}

//         </div>

//     </div>
//   )
// }

// export default RelatedProducts


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './productItem';

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]); // Initialize as an empty array

  useEffect(() => {
    if (products.length > 0) {
      // Filter products by category and subCategory, and exclude the current product
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory &&
          item._id !== currentProductId // Exclude the current product
      );

      console.log('Related Products:', productsCopy.slice(0, 5)); // Debugging
      setRelated(productsCopy.slice(0, 5)); // Show only the first 5 related products
    }
  }, [products, category, subCategory, currentProductId]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
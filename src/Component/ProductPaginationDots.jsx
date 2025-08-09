import React from "react";

const ProductPaginationDots = ({ 
  products, 
  activeProduct, 
  sectionRefs 
}) => {
  const handleDotClick = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
      {products.map((_, index) => (
        <div
          key={index}
          className={`transition-all duration-300 rounded-full cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-110 ${
            activeProduct === index
              ? 'w-10 h-3 bg-gradient-to-r from-teal-500 to-teal-700'
              : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
          }`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};

export default ProductPaginationDots;
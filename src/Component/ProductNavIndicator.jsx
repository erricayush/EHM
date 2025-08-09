import React from "react";

const ProductNavIndicator = ({ 
  products, 
  activeProduct, 
  visibleSections, 
  sectionRefs 
}) => {
  const handleIndicatorClick = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="absolute -right-4 top-0 flex flex-col justify-between z-20" style={{ height: '42rem' }}>
      <div className="py-4 flex flex-col justify-between h-full">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-1 transition-all duration-300 cursor-pointer rounded-full ${
              activeProduct === index
                ? 'h-8 bg-gradient-to-b from-teal-500 to-teal-700 shadow-lg'
                : visibleSections.includes(index)
                ? 'h-4 bg-teal-300 hover:bg-teal-400 shadow-md'
                : 'h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductNavIndicator;
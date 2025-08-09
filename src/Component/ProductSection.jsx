import React from "react";

const ProductSection = ({ 
  product, 
  index, 
  isVisible, 
  isActive, 
  sectionRef 
}) => {
  return (
    <div
      ref={sectionRef}
      className={`h-[calc(100vh-10rem)] flex items-center justify-center lg:justify-end transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      } ${
        isActive 
          ? 'scale-100' 
          : 'scale-95'
      }`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      <div className="space-y-6 w-full max-w-lg px-4 lg:pr-12 lg:pl-0">
        <div className={`space-y-6 transition-all duration-500 ${
          isActive ? 'transform translate-x-0' : 'transform translate-x-4'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
            {product.title}
          </h2>
          <div className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            {product.buttons.map((btn, i) => (
              <button
                key={i}
                className={`px-8 py-4 text-base font-semibold border-2 rounded-lg transition-all duration-300 ${
                  i === 0
                    ? "bg-teal-600 text-white border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:shadow-lg transform hover:scale-105"
                    : "border-teal-600 text-teal-600 hover:bg-teal-50 hover:shadow-md transform hover:scale-105"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
import React from "react";

const ProductImageDisplay = ({ 
  products, 
  activeProduct 
}) => {
  return (
    <div className="fixed top-26 right-0-mr-2 w-full lg:w-3/5 h-[calc(100vh-12rem)] flex items-start justify-center lg:justify-start lg:pl-8 pt-8">
      <div className="w-full max-w-2xl group relative">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              activeProduct === index
                ? 'opacity-100 scale-100 rotate-0 z-10 transform translate-x-0'
                : 'opacity-0 scale-95 z-0 transform translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[40rem] object-cover transition-all duration-500 ease-out transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-3xl"
                style={{
                  boxShadow: activeProduct === index 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 25px rgba(13, 148, 136, 0.2)'
                    : '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 40px 80px -12px rgba(100, 116, 139, 0.4), 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 15px 35px rgba(100, 116, 139, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = activeProduct === index 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 25px rgba(13, 148, 136, 0.2)'
                    : '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                }}
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-2xl blur-sm opacity-0 hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>
            
            {/* Product counter */}
            <div className={`absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              activeProduct === index ? 'opacity-100' : 'opacity-0'
            }`}>
              {index + 1} / {products.length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageDisplay;
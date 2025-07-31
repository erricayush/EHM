import React, { useState, useEffect, useRef } from "react";

// Mock images for demonstration
import pic1 from "../assets/pic1.jpg";

import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const products = [
  {
    id: 1,
    title: "🌿 Nature-Based Solutions for Sewage & Greywater Treatment",
    description: (
      <>
        <ul className="list-decimal ml-6 text-gray-700 space-y-2">
          <li>
           Enables safe reuse of treated water for irrigation, flushing, or groundwater recharge.
          </li>
          <li>
           educes contamination and disease spread through better sanitation.
          </li>
          <li>
            Common methods include constructed wetlands, soak pits, bioremediation, etc.
          </li>
          <li>
            Creates cleaner, safer surroundings in communities and campuses.
          </li>
          <li>
            Supports green spaces like wetlands and eco-parks.
          </li>
        </ul>
      </>
    ),
    image: pic1,
    buttons: ["Read More"]
  },
  {
    id: 2,
    title: "Water Positive Campus",
    description: (
      <>
        <ul className="list-decimal ml-6 text-gray-700 space-y-2">
          <li>
            Water Conservation Focus – Uses strategies like rainwater harvesting, low-flow fixtures, and leak detection systems.
          </li>
          <li>
            Water Recycling – Reuses greywater and wastewater after treatment for gardening, flushing, and cooling.
          </li>
          <li>
            Groundwater Recharge – Employs percolation pits and recharge wells to replenish underground aquifers.
          </li>
          <li>
            Minimizes dependency on municipal or groundwater sources.
          </li>
          <li>
            Helps restore local water tables and sustain ecosystem balance.
          </li>
        </ul>
      </>
    ),
    image: pic2,
    buttons: ["Read More"]
  },
  {
    id: 3,
    title: "Sustainability Reporting",
    description: (
      <>
        <ul className="list-decimal ml-6 text-gray-700 space-y-2">
          <li>
            Builds trust with investors, customers, and regulators
          </li>
          <li>
            Identifies sustainability risks and opportunities
          </li>
          <li>
            Improves internal processes and ESG performance
          </li>
          <li>
            Shows commitment to environmental and social responsibility.
          </li>
          <li>
            Improves credibility with investors, customers, employees, and regulators.
          </li>
        </ul>
      </>
    ),
    image: pic3,
    buttons: ["Read More"]
  }
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      
      const newVisibleSections = [];
      let newActiveProduct = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const sectionCenter = sectionTop + rect.height / 2;

        
        const isVisible = sectionTop < windowHeight && sectionBottom > 0;
        
        if (isVisible) {
          newVisibleSections.push(index);
        }

       
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
        if (distanceFromCenter < closestDistance && isVisible) {
          closestDistance = distanceFromCenter;
          newActiveProduct = index;
        }
      });

      setVisibleSections(newVisibleSections);
      setActiveProduct(newActiveProduct);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen" ref={containerRef}>
      {/* -------------------------------------------Title--------------------------------------------------*/}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-50/95 backdrop-blur-sm border-b border-gray-200">
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-teal-900">Our Products</h1>
        </div>
      </div>

      
      <div className="pt-20 px-6 md:px-20 pb-32">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-10rem)]">
         
          <div className="lg:w-2/5 lg:order-1 space-y-0">
            {products.map((product, index) => {
              const isVisible = visibleSections.includes(index);
              const isActive = activeProduct === index;
              
              return (
                <div
                  key={product.id}
                  ref={el => sectionRefs.current[index] = el}
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
            })}
          </div>

          {/* ---------------------------------------------------------------Image Section - Right Side - Fixed----------------------------------------------------- */}
          <div className="lg:w-3/5 lg:order-2">
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
                      
                      {/*  ------------------------------------------image overlay ------------------------------------------------- */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500"></div>
                      
                      
                      <div className="absolute -inset-1 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-2xl blur-sm opacity-0 hover:opacity-100 transition-all duration-500 -z-10"></div>
                    </div>
                    
                    
                    <div className={`absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      activeProduct === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {index + 1} / {products.length}
                    </div>
                  </div>
                ))}
                
                
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
                        onClick={() => {
                          sectionRefs.current[index]?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'center'
                          });
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {products.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-110 ${
              activeProduct === index
                ? 'w-10 h-3 bg-gradient-to-r from-teal-500 to-teal-700'
                : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
            }`}
            onClick={() => {
              sectionRefs.current[index]?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            }}
          />
        ))}
      </div>
    </section>
  );
}
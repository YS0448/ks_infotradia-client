import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-white z-0"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unlock the Power of <span className="text-primary-600">Trade Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              We transform complex global trade data into clear, actionable insights — powered by AI and built for decision-makers who move markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Explore Solutions
              </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary-600">7</span>
                  <span className="ml-2 text-gray-600">Types of<br />Specialized Data</span>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary-600">90+</span>
                  <span className="ml-2 text-gray-600">Countries<br />Covered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up lg:h-[500px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-24 right-24 w-64 h-64 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <div className="relative h-full rounded-lg shadow-2xl overflow-hidden border border-gray-200 bg-white">
              <div className="bg-primary-600 text-white p-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="h-8 w-full bg-gray-200 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-32 bg-primary-100 rounded flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary-400"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-primary-100 rounded flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary-400"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="mt-6">
                  <div className="h-10 bg-primary-500 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
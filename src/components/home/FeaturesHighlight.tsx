import { PieChart, LineChart, BarChart4, Layers, Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesHighlight = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Powerful Features for Trade Professionals</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our platform delivers advanced analytical capabilities with an intuitive interface, giving you the power to make informed decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary-100 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/features" className="btn btn-primary">
                Explore All Features
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-primary-700 text-white p-4">
                <h4 className="font-medium">Trade Analytics Dashboard</h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                    <PieChart className="h-10 w-10 text-primary-500" />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                    <LineChart className="h-10 w-10 text-primary-500" />
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="bg-gray-100 rounded-lg h-40 p-4">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="grid grid-cols-6 gap-1 h-24">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="bg-primary-300 rounded-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-accent-100 rounded-full"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Real-time Analytics",
    description: "Access up-to-the-minute data on global trade movements and market shifts.",
    icon: BarChart4
  },
  {
    title: "Smart Search",
    description: "Find exactly what you need with our powerful search and filtering system.",
    icon: Search
  },
  {
    title: "Visual Dashboards",
    description: "Interactive visualizations that make complex data easy to understand.",
    icon: PieChart
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security ensuring your data and insights remain protected.",
    icon: Shield
  }
];

export default FeaturesHighlight;
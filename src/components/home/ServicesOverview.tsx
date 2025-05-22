import { ArrowUpRight, Database, LineChart, Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Precision-Driven Trade Intelligence</h2>
          <p className="text-lg text-gray-600">
            We do more than deliver data — we help businesses harness its full potential with end-to-end intelligence solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card bg-white p-6 hover:translate-y-[-5px] group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Data Access & Subscription",
    description: "Flexible plans for one-time, periodic, or continuous access to global trade data.",
    icon: Database,
    link: "/services#access"
  },
  {
    title: "Custom Reports",
    description: "Bespoke data extraction and deep-dive reporting aligned with your specific goals.",
    icon: Search,
    link: "/services#reports"
  },
  {
    title: "AI-Powered Analytics",
    description: "Interactive dashboards that transform complex data into immediate insight.",
    icon: LineChart,
    link: "/services#analytics"
  },
  {
    title: "Enterprise Solutions",
    description: "Secure integration into your existing systems with dedicated support.",
    icon: Shield,
    link: "/services#enterprise"
  }
];

export default ServicesOverview;
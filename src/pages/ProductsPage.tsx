import { BarChart2, Database, Globe, Search, TrendingUp, Download } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Products | KS Infotrade</title>
        <meta name="description" content="Explore KS Infotrade's comprehensive trade data products, market intelligence tools, and analytics platforms." />
      </Helmet>
      
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Trade Intelligence Products</h1>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive solutions designed to give you a competitive edge in global trade markets.
              </p>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Trade Data Product Suite</h2>
              <p className="text-lg text-gray-600">
                From comprehensive import/export databases to specialized market analysis tools, our products provide the insights you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 p-6 flex items-center justify-center">
                    <product.icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-primary-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-secondary w-full">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Product Screenshots */}
        {/* <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Platform Interface</h2>
              <p className="text-lg text-gray-600">
                Our intuitive interface makes complex data easily accessible and actionable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card overflow-hidden">
                <div className="bg-primary-700 text-white p-4">
                  <h4 className="font-medium">Trade Analytics Dashboard</h4>
                </div>
                <div className="p-4 bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Dashboard Screenshot</p>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="bg-primary-700 text-white p-4">
                  <h4 className="font-medium">Market Intelligence View</h4>
                </div>
                <div className="p-4 bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Market Intelligence Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        {/* Pricing Plans */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600">
                Choose the plan that best fits your business needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`card border ${plan.featured ? 'border-primary-500 ring-2 ring-primary-200' : 'border-gray-200'} relative`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-primary-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`btn w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600">
                Need a custom solution? <a href="/contact" className="text-primary-600 font-medium">Contact us</a> for enterprise pricing options.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6">
                  <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const products = [
  {
    title: "Global Trade Database",
    description: "Comprehensive import-export data covering over 100 countries with detailed shipment records.",
    icon: Database,
    features: [
      "200+ million trade records",
      "5-year historical data",
      "Monthly updates",
      "Detailed HS code classification",
      "Company-level transaction data"
    ]
  },
  {
    title: "Market Intelligence Platform",
    description: "Real-time analytics and insights on global market trends, competition, and opportunities.",
    icon: TrendingUp,
    features: [
      "Market trend analysis",
      "Competitor tracking",
      "Price monitoring",
      "Demand forecasting",
      "Custom industry reports"
    ]
  },
  {
    title: "Trade Explorer",
    description: "Interactive visualization tool for exploring trade flows and identifying market opportunities.",
    icon: Globe,
    features: [
      "Interactive data visualizations",
      "Country-to-country trade flows",
      "Product category analysis",
      "Market opportunity mapping",
      "Export data CSV/Excel"
    ]
  }
];

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and new exporters/importers.",
    price: "299",
    featured: false,
    features: [
      "Access to basic trade data",
      "Limited historical data (1 year)",
      "5 user searches per day",
      "Standard reports",
      "Email support"
    ]
  },
  {
    name: "Professional",
    description: "For growing businesses with regular international trade.",
    price: "799",
    featured: true,
    features: [
      "Full access to trade database",
      "3-year historical data",
      "Unlimited searches",
      "Custom report builder",
      "Market insights dashboard",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for large organizations.",
    price: "1499",
    featured: false,
    features: [
      "Everything in Professional",
      "5-year historical data",
      "API access for integration",
      "Advanced analytics tools",
      "Dedicated account manager",
      "Custom data feeds"
    ]
  }
];

const faqs = [
  {
    question: "How current is the trade data in your database?",
    answer: "Our trade data is updated monthly for most countries, with some major markets receiving weekly updates. The typical lag between actual trade activity and data availability is 60-90 days, which is the industry standard due to customs processing times."
  },
  {
    question: "Can I integrate your data with my existing ERP or CRM system?",
    answer: "Yes, our Enterprise and Professional plans offer API access that allows for seamless integration with your existing systems. Our team can provide technical support and documentation to assist with implementation."
  },
  {
    question: "How accurate is your trade data?",
    answer: "We source our data directly from official customs records and trade ministries, ensuring the highest possible accuracy. Our data undergoes rigorous cleaning and validation processes, resulting in a 99.9% accuracy rate for the information provided."
  },
  {
    question: "Do you offer custom reports for specific markets or products?",
    answer: "Yes, we provide customized reports tailored to your specific business needs. Our analysts can create reports focused on particular markets, product categories, competitors, or trade trends relevant to your industry."
  }
];

export default ProductsPage;
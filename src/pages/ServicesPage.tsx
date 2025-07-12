import { BarChart2, Database, LineChart, PieChart, Lock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import main_img2 from '../assets/media/image/data_img.jpg'
import secure_integration from '../assets/media/image/secure_integration.jpg'

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | KS Infotrade</title>
        <meta name="description" content="KS Infotrade offers comprehensive trade data analytics services, custom reports, and integration solutions for global businesses." />
      </Helmet>
      
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive trade intelligence solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="analytics" className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-lg mb-4">
                  <BarChart2 className="inline-block mr-2 h-5 w-5" />
                  Data Analytics
                </div>
                <h2 className="text-3xl font-bold mb-6">Trade Data Analytics</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transform raw trade data into actionable business intelligence with our advanced analytics solutions.
                </p>
                <ul className="space-y-4 mb-8">
                  {dataAnalyticsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 text-primary-600 mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
              
              <div className="bg-gray-100 rounded-lg relative h-[600px] shadow-xl overflow-hidden">
                {/* <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-100 rounded-lg -z-10"></div>
                <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg">
                  <div className="bg-primary-700 text-white p-4">
                    <h4 className="font-medium">Analytics Dashboard</h4>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <PieChart className="h-10 w-10 text-primary-500" />
                      </div>
                      <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <LineChart className="h-10 w-10 text-primary-500" />
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="grid grid-cols-6 gap-1 h-32">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div key={i} className="bg-primary-300 rounded-sm" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
                  <img src={main_img2} alt="" className='rounded-xl h-auto w-auto' />

              </div>
            </div>
          </div>
        </section>
        
        {/* Market Intelligence */}
        <section id="intelligence" className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-lg p-8 relative shadow-lg">
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-lg -z-10"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {intelligenceCards.map((card, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                        <card.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{card.title}</h4>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-lg mb-4">
                  <Database className="inline-block mr-2 h-5 w-5" />
                  Market Insights
                </div>
                <h2 className="text-3xl font-bold mb-6">Market Intelligence</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Stay ahead of the competition with real-time insights into global markets, trends, and opportunities.
                </p>
                <ul className="space-y-4 mb-8">
                  {marketIntelligenceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 text-accent-600 mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="btn bg-accent-600 hover:bg-accent-700 text-white">Explore Insights</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Custom Reports */}
        <section id="reports" className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-lg mb-4">
                <BookOpen className="inline-block mr-2 h-5 w-5" />
                Custom Solutions
              </div>
              <h2 className="mb-4">Custom Data Reports</h2>
              <p className="text-lg text-gray-600">
                Tailored reports that provide exactly the data you need, formatted to your specifications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reportTypes.map((report, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <ul className="space-y-2 mb-6">
                    {report.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-5 w-5 text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Need a custom report for your specific business requirements?
              </p>
              <Link to="/contact" className="btn btn-primary">
                Request Custom Report
              </Link>
            </div>
          </div>
        </section>
        
        {/* Integration */}
        <section id="integration" className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-lg mb-4">
                  <Lock className="inline-block mr-2 h-5 w-5" />
                  Secure Integration
                </div>
                <h2 className="text-3xl font-bold mb-6">Integration Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Seamlessly integrate our trade data with your existing systems via our secure and powerful API.
                </p>
                <ul className="space-y-4 mb-8">
                  {integrationFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 text-secondary-600 mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="btn bg-secondary-600 hover:bg-secondary-700 text-white">API Documentation</button>
              </div>
              
              {/* <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Sample API Request</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto">
                    <pre>
{`GET /api/v1/trade-data?
  product=8544&
  exporter=DE&
  importer=US&
  period=2024-Q1
  
Authorization: Bearer YOUR_API_KEY`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Sample Response</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-blue-400 font-mono text-sm overflow-x-auto">
                    <pre>
{`{
  "data": [
    {
      "date": "2024-01-15",
      "exporter": "Germany",
      "importer": "United States",
      "product": "8544 - Insulated Wire",
      "quantity": 15000,
      "value": 425000,
      "unit": "KG"
    },
    ...
  ],
  "meta": {
    "count": 24,
    "total_value": 9850000
  }
}`}
                    </pre>
                  </div>
                </div>
              </div> */}
                            <div className="bg-gray-100 rounded-lg relative h-[600px] shadow-xl overflow-hidden">

                                <img src={secure_integration} alt="" className='rounded-xl h-auto w-auto' />
                </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Hear from businesses that have transformed their trade strategy with our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center mb-4">
                    {/* <div className="mr-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div> */}
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="mr-1">★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const dataAnalyticsFeatures = [
  {
    title: "Pattern Recognition",
    description: "Identify hidden patterns and trends in global trade data that impact your business."
  },
  {
    title: "Predictive Analytics",
    description: "Forecast market movements and anticipate changes in supply and demand."
  },
  {
    title: "Competitive Intelligence",
    description: "Track competitor activities, market share, and strategic movements."
  },
  {
    title: "Performance Metrics",
    description: "Measure your trade performance against industry benchmarks and competitors."
  }
];

const marketIntelligenceFeatures = [
  {
    title: "Market Opportunity Assessment",
    description: "Identify untapped markets and growth opportunities for your products."
  },
  {
    title: "Price Monitoring",
    description: "Track price fluctuations and analyze pricing strategies across markets."
  },
  {
    title: "Supplier Intelligence",
    description: "Discover and evaluate potential suppliers based on trade history and reliability."
  },
  {
    title: "Risk Assessment",
    description: "Evaluate market risks and develop mitigation strategies based on data-driven insights."
  }
];

const intelligenceCards = [
  {
    title: "Market Trends",
    description: "Visual analysis of emerging market trends and shifts in trade patterns.",
    icon: LineChart
  },
  {
    title: "Competitor Analysis",
    description: "Detailed insights into competitor activities and market positioning.",
    icon: PieChart
  },
  {
    title: "Supplier Evaluation",
    description: "Data-driven assessment of supplier reliability and performance.",
    icon: BarChart2
  },
  {
    title: "Risk Monitoring",
    description: "Early warning system for market disruptions and trade risks.",
    icon: Lock
  }
];

const reportTypes = [
  {
    title: "Market Entry Reports",
    description: "Comprehensive analysis for businesses entering new international markets.",
    content: [
      "Market size and growth potential",
      "Competitive landscape analysis",
      "Regulatory requirements and barriers",
      "Distribution channel assessment",
      "Pricing strategy recommendations"
    ]
  },
  {
    title: "Supplier Intelligence Reports",
    description: "In-depth evaluation of potential suppliers and sourcing markets.",
    content: [
      "Supplier trading history and reliability",
      "Price comparison analysis",
      "Quality assessment metrics",
      "Supply chain risk evaluation",
      "Alternative supplier recommendations"
    ]
  },
  {
    title: "Competitor Analysis Reports",
    description: "Strategic insights into competitor activities and market positioning.",
    content: [
      "Market share analysis",
      "Product portfolio assessment",
      "Pricing strategy comparison",
      "Export/import volume trends",
      "Strategic recommendations"
    ]
  }
];

const integrationFeatures = [
  {
    title: "Secure API Access",
    description: "RESTful API with robust authentication and encryption to ensure your data remains secure."
  },
  {
    title: "Flexible Data Formats",
    description: "Support for JSON, XML, and CSV formats to suit your existing systems and workflows."
  },
  {
    title: "Real-time Updates",
    description: "Subscribe to real-time data updates and notifications for critical trade changes."
  },
  {
    title: "Custom Data Endpoints",
    description: "Tailored API endpoints designed specifically for your business requirements."
  }
];

const testimonials = [
  {
    name: "David Chen",
    position: "Import Manager, TechGlobal Inc.",
    quote: "KS Infotrade's analytics platform has transformed how we approach supplier selection. We've reduced costs by 18% while improving supply chain reliability."
  },
  {
    name: "Maria Rodriguez",
    position: "VP of International Trade, Horizon Exports",
    quote: "The market intelligence reports helped us identify high-potential markets we hadn't considered. Our export volume increased by 32% in just one year."
  },
  {
    name: "John Williams",
    position: "CEO, MedSupply International",
    quote: "The custom reports provide exactly the data we need to make strategic decisions. The ROI on our subscription has been exceptional."
  }
];

export default ServicesPage;
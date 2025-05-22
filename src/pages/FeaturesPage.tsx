import { BarChart2, PieChart, LineChart, Filter, Zap, Clock, Database, Shield, BarChart3, Globe, Layers, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';

const FeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Features | KS Infotrade</title>
        <meta name="description" content="Explore the powerful features of KS Infotrade's trade data analytics platform, including real-time data access, visualization dashboards, and more." />
      </Helmet>
      
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Platform Features</h1>
              <p className="text-xl text-gray-600 mb-6">
                Powerful tools and capabilities designed to transform trade data into actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Overview */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Powerful Analytics Capabilities</h2>
              <p className="text-lg text-gray-600">
                Our platform combines advanced data processing with intuitive interfaces to deliver powerful trade insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="card p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Data Visualization */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-lg mb-4">
                  <PieChart className="inline-block mr-2 h-5 w-5" />
                  Data Visualization
                </div>
                <h2 className="text-3xl font-bold mb-6">Interactive Visualizations</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transform complex trade data into clear, actionable visualizations that help you make better decisions.
                </p>
                <ul className="space-y-4 mb-8">
                  {visualizationFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 text-primary-600 mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="card p-4 flex items-center justify-center">
                  <div className="w-full h-48 bg-primary-50 rounded-lg flex items-center justify-center">
                    <PieChart className="h-16 w-16 text-primary-400" />
                  </div>
                </div>
                <div className="card p-4 flex items-center justify-center">
                  <div className="w-full h-48 bg-secondary-50 rounded-lg flex items-center justify-center">
                    <BarChart2 className="h-16 w-16 text-secondary-400" />
                  </div>
                </div>
                <div className="card p-4 flex items-center justify-center">
                  <div className="w-full h-48 bg-accent-50 rounded-lg flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-accent-400" />
                  </div>
                </div>
                <div className="card p-4 flex items-center justify-center">
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* User Experiences */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Tailored for Different Users</h2>
              <p className="text-lg text-gray-600">
                Our platform offers specialized features to meet the unique needs of different trade professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {userProfiles.map((profile, index) => (
                <div key={index} className="card overflow-hidden border border-gray-200 transition-all duration-300 hover:border-primary-300">
                  <div className="h-3 bg-primary-600"></div>
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 mx-auto">
                      <profile.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{profile.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{profile.description}</p>
                    
                    <h4 className="font-semibold mb-2 text-gray-700">Key Features:</h4>
                    <ul className="space-y-2 mb-4">
                      {profile.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-primary-600 mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold mb-2 text-gray-700">Benefits:</h4>
                    <ul className="space-y-2">
                      {profile.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-green-600 mr-2">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Advanced Features */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                  <div className="space-y-6">
                    {advancedFeaturesList.map((feature, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                            <feature.icon className="h-5 w-5 text-primary-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-lg mb-4">
                  <Zap className="inline-block mr-2 h-5 w-5" />
                  Advanced Capabilities
                </div>
                <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Features</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Designed to meet the complex needs of large organizations with sophisticated trade operations.
                </p>
                <ul className="space-y-4 mb-8">
                  {enterpriseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 text-accent-600 mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Platform Security */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-lg mb-4">
                <Shield className="inline-block mr-2 h-5 w-5" />
                Security & Compliance
              </div>
              <h2 className="mb-4">Enterprise-Grade Security</h2>
              <p className="text-lg text-gray-600">
                Our platform implements rigorous security measures to protect your data and ensure compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technical Specifications */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Technical Specifications</h2>
              <p className="text-lg text-gray-600">
                Our platform is built on modern technology to ensure reliability, scalability, and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Platform Infrastructure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Cloud-Based Architecture:</span>
                      <span className="text-gray-600"> Deployed on AWS with multi-region availability</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Database:</span>
                      <span className="text-gray-600"> Distributed NoSQL for real-time analytics</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">API:</span>
                      <span className="text-gray-600"> RESTful API with OAuth 2.0 authentication</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Uptime:</span>
                      <span className="text-gray-600"> 99.99% guaranteed with SLA</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Data Processing:</span>
                      <span className="text-gray-600"> Apache Spark for large-scale data analysis</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Data Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Data Volume:</span>
                      <span className="text-gray-600"> 200+ million trade records</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Historical Data:</span>
                      <span className="text-gray-600"> Up to 5 years for most countries</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Data Refresh:</span>
                      <span className="text-gray-600"> Monthly updates with weekly for major markets</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Data Formats:</span>
                      <span className="text-gray-600"> JSON, XML, CSV, Excel</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-primary-600 mr-3">•</span>
                    <div>
                      <span className="font-semibold">Data Accuracy:</span>
                      <span className="text-gray-600"> 99.9% verified through multiple validation processes</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const keyFeatures = [
  {
    title: "Real-Time Analytics",
    description: "Access up-to-the-minute data on global trade movements and market shifts through our live analytics dashboard.",
    icon: Clock
  },
  {
    title: "Smart Filtering",
    description: "Powerful filtering options allow you to narrow down data by country, product, time period, and more for targeted analysis.",
    icon: Filter
  },
  {
    title: "Trend Identification",
    description: "Automatically detect emerging trends and patterns in trade data to stay ahead of market movements.",
    icon: LineChart
  },
  {
    title: "Custom Reports",
    description: "Generate tailored reports with exactly the data you need, formatted according to your preferences.",
    icon: BarChart3
  },
  {
    title: "Global Coverage",
    description: "Comprehensive trade data from over 100 countries, covering all major trading partners and commodities.",
    icon: Globe
  },
  {
    title: "Data Export",
    description: "Export data and visualizations in multiple formats for integration with your existing tools and reports.",
    icon: Database
  }
];

const visualizationFeatures = [
  {
    title: "Interactive Dashboards",
    description: "Customizable dashboards that allow you to arrange visualizations according to your specific needs."
  },
  {
    title: "Dynamic Charts",
    description: "Interactive charts that respond to user input, allowing for deeper exploration of trade data."
  },
  {
    title: "Trade Flow Maps",
    description: "Visualize global trade flows with interactive maps that show import/export relationships."
  },
  {
    title: "Comparative Analysis",
    description: "Side-by-side visualization tools to compare different time periods, markets, or products."
  }
];

const userProfiles = [
  {
    title: "For Trade Analysts",
    description: "Specialized tools for professionals who need to conduct in-depth analysis of trade data.",
    icon: BarChart2,
    features: [
      "Advanced filtering and segmentation",
      "Statistical analysis tools",
      "Pattern recognition algorithms",
      "Historical data comparison"
    ],
    benefits: [
      "Reduce analysis time by 75%",
      "Discover hidden market opportunities",
      "Generate more accurate forecasts",
      "Support data-driven recommendations"
    ]
  },
  {
    title: "For Importers/Exporters",
    description: "Practical tools focused on identifying opportunities and optimizing international trade operations.",
    icon: Globe,
    features: [
      "Supplier/buyer discovery",
      "Price trend monitoring",
      "Market entry analysis",
      "Competitor tracking"
    ],
    benefits: [
      "Find reliable new trading partners",
      "Negotiate better prices with data",
      "Expand into high-potential markets",
      "Optimize logistics and costs"
    ]
  },
  {
    title: "For Executives",
    description: "High-level insights and summaries to support strategic decision-making and planning.",
    icon: Users,
    features: [
      "Executive dashboards",
      "Strategic opportunity mapping",
      "Market risk assessments",
      "Performance benchmarking"
    ],
    benefits: [
      "Make informed strategic decisions",
      "Identify emerging market threats",
      "Track global market position",
      "Support data-driven planning"
    ]
  }
];

const enterpriseFeatures = [
  {
    title: "Advanced Data Integration",
    description: "Seamlessly integrate our platform with your ERP, CRM, or custom systems through secure API connections."
  },
  {
    title: "Custom Machine Learning Models",
    description: "Leverage our AI capabilities to develop predictive models specific to your business needs and market focus."
  },
  {
    title: "Dedicated Data Scientist",
    description: "Enterprise plans include access to a dedicated data scientist to help you extract maximum value from trade data."
  },
  {
    title: "White Label Solutions",
    description: "Integrate our analytics capabilities into your own platforms with custom branding and tailored interfaces."
  }
];

const advancedFeaturesList = [
  {
    title: "AI-Powered Price Forecasting",
    description: "Predict future price movements based on historical trends and market indicators.",
    icon: LineChart
  },
  {
    title: "Anomaly Detection",
    description: "Automatically identify unusual patterns or outliers in trade data that might represent opportunities or risks.",
    icon: BarChart2
  },
  {
    title: "Custom Alert System",
    description: "Set up personalized alerts for specific market conditions, price changes, or competitor activities.",
    icon: Zap
  },
  {
    title: "Multi-Source Data Fusion",
    description: "Combine trade data with economic indicators, news events, and other external data for richer insights.",
    icon: Layers
  }
];

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All data is encrypted both in transit and at rest to ensure maximum security.",
    icon: Shield
  },
  {
    title: "Role-Based Access",
    description: "Granular permission controls allow you to manage exactly who can access different data and features.",
    icon: Users
  },
  {
    title: "Compliance",
    description: "Our platform meets international data security standards including GDPR, SOC 2, and ISO 27001.",
    icon: Database
  },
  {
    title: "Audit Logging",
    description: "Comprehensive activity logs maintain a record of all data access and platform usage.",
    icon: Clock
  }
];

export default FeaturesPage;
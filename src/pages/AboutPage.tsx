import { Briefcase, Target, Users, Award } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | KS Infotrade</title>
        <meta name="description" content="Learn about KS Infotrade, our mission, vision, and experienced team delivering trade data analytics solutions." />
      </Helmet>
      
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">About KS Infotrade</h1>
              <p className="text-xl text-gray-600 mb-6">
                We are a team of data scientists, trade experts and analysts dedicated to transforming how businesses understand and leverage international trade data.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-primary-50 p-8 rounded-lg">
                <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To democratize access to global trade data by providing intuitive, powerful analytics that enable businesses of all sizes to make informed decisions in international markets.
                </p>
              </div>
              
              <div className="bg-accent-50 p-8 rounded-lg">
                <div className="w-14 h-14 rounded-lg bg-accent-100 flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-accent-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become the leading provider of trade intelligence, recognized globally for our data accuracy, analytical insights, and commitment to customer success in navigating international trade.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide everything we do at KS Infotrade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card p-6 text-center hover:border-primary-300 hover:border">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        {/* <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Meet the experts behind KS Infotrade's innovative trade data solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card overflow-hidden group">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* Experience & Credibility */}
        <section className="section bg-primary-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Industry Experience & Credibility</h2>
              <p className="text-lg text-gray-600">
                With over two decades of experience in international trade and data analytics, we've built a reputation for excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="card p-6 border-t-4 border-primary-600">
                <h3 className="text-xl font-bold mb-4">5+ Years Experience</h3>
                <p className="text-gray-600">
                  Our team combines decades of expertise in international trade with cutting-edge data science capabilities.
                </p>
              </div>
              
              <div className="card p-6 border-t-4 border-primary-600">
                <h3 className="text-xl font-bold mb-4">1000+ Clients Worldwide</h3>
                <p className="text-gray-600">
                  Trusted by businesses of all sizes, from Fortune 500 companies to growing exporters and importers.
                </p>
              </div>
              
              <div className="card p-6 border-t-4 border-primary-600">
                <h3 className="text-xl font-bold mb-4">99.9% Data Accuracy</h3>
                <p className="text-gray-600">
                  Our rigorous verification and cleaning processes ensure you can trust the data driving your decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const values = [
  {
    title: "Data Integrity",
    description: "We are committed to providing accurate, timely, and comprehensive trade data you can trust.",
    icon: Award
  },
  {
    title: "Innovation",
    description: "We continuously improve our technology to deliver cutting-edge analytics and insights.",
    icon: Target
  },
  {
    title: "Customer Success",
    description: "Your business goals drive our solutions. We measure our success by your outcomes.",
    icon: Users
  },
  {
    title: "Accessibility",
    description: "We believe powerful trade intelligence should be intuitive and accessible to all businesses.",
    icon: Briefcase
  }
];

const team = [
  {
    name: "Katherine Smith",
    position: "Chief Executive Officer",
    bio: "With over 15 years in international trade and data analytics, Katherine leads our strategic vision and growth initiatives."
  },
  {
    name: "Michael Johnson",
    position: "Chief Technology Officer",
    bio: "Michael brings 20 years of experience in building scalable data platforms and leads our product development team."
  },
  {
    name: "Sarah Williams",
    position: "Head of Data Science",
    bio: "Sarah specializes in predictive analytics and machine learning applications for trade data analysis."
  }
];

export default AboutPage;
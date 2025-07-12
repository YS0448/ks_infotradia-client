import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import ClientsSection from '../components/home/ClientsSection';
import FeaturesHighlight from '../components/home/FeaturesHighlight';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>KS Infotrade | Trade Data Analytics Solutions</title>
        <meta name="description" content="KS Infotrade provides advanced trade data analytics and solutions for businesses engaged in international trade." />
      </Helmet>
      
      <div>
        <HeroSection />
        <ServicesOverview />
        {/* <ClientsSection /> */}
        <FeaturesHighlight />
        <CtaSection />
      </div>
    </>
  );
};

export default HomePage;
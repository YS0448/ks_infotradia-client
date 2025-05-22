import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section bg-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Trade Strategy?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Get started today and discover how our trade intelligence platform can give you the competitive edge in global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Schedule a Demo
            </Link>
            <Link to="/products" className="btn bg-transparent border border-white text-white hover:bg-primary-700">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
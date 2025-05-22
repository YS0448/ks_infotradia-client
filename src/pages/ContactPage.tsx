import { useState } from 'react';
import { Map, Phone, Mail, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'General Inquiry'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsSubmitted(true);
  //     // Reset form after submission
  //     setFormData({
  //       name: '',
  //       email: '',
  //       company: '',
  //       phone: '',
  //       message: '',
  //       interest: 'General Inquiry'
  //     });
  //   }, 1500);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'General Inquiry'
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Error submitting the form.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <>
      <Helmet>
        <title>Contact Us | KS Infotrade</title>
        <meta name="description" content="Contact KS Infotrade for trade data analytics solutions, custom reports, and integration support." />
      </Helmet>
      
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-6">
                Have questions about our trade data solutions? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're available to answer your questions and discuss how our trade intelligence solutions can help your business.
                </p>
                
                <div className="space-y-6">
                  {/* <div className="flex items-start">
                    <div className="mt-1 mr-4 p-2 bg-primary-100 rounded-lg">
                      <Map className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-gray-600">
                        123 Trade Avenue, Business District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 p-2 bg-primary-100 rounded-lg">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+12125551234" className="hover:text-primary-600 transition-colors">
                          +1 (212) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 p-2 bg-primary-100 rounded-lg">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:ajay.ksinfotrade25@gmail.com" className="hover:text-primary-600 transition-colors">
                          ajay.ksinfotrade25@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM (EST)</li>
                    <li>Saturday: 10:00 AM - 2:00 PM (EST)</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for contacting KS Infotrade. Our team will get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="btn btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                            What are you interested in?
                          </label>
                          <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Product Demo">Product Demo</option>
                            <option value="Custom Reports">Custom Reports</option>
                            <option value="API Integration">API Integration</option>
                            <option value="Pricing">Pricing Information</option>
                          </select>
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          ></textarea>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary w-full sm:w-auto"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        {/* <section className="section bg-gray-50 pt-0">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 text-lg">Interactive Map</p>
                  <p className="text-gray-500">(Google Maps will be embedded here)</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contactFaqs.map((faq, index) => (
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

const contactFaqs = [
  {
    question: "How quickly can I get access to the platform after signing up?",
    answer: "Once you sign up for a plan, you'll receive access credentials within 24 hours. For enterprise plans requiring custom setup, our team will provide a specific timeline during the onboarding process."
  },
  {
    question: "Do you offer personalized demos?",
    answer: "Yes, we provide personalized demonstrations tailored to your specific industry and business needs. You can schedule a demo through our contact form or by calling our sales team directly."
  },
  {
    question: "What support options are available?",
    answer: "All plans include email support with varying response times. Professional and Enterprise plans include priority support with dedicated account managers and technical assistance for integration."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle. Contact our customer success team to discuss upgrade options."
  }
];

export default ContactPage;
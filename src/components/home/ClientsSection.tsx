const ClientsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-800">Trusted by Industry Leaders</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 w-full flex items-center justify-center">
              <div className="bg-gray-200 h-6 w-32 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
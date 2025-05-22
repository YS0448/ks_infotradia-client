import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-primary-600 mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
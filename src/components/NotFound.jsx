const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <a href="/" className="text-lg bg-blue-600 text-white px-4 py-2 rounded">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;

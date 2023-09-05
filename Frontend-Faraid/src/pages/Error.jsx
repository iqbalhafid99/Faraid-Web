function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-teal-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Oops, Something Went Wrong!
        </h1>
        <p className="text-lg text-white">
          We're sorry, but the page you're looking for cannot be found.
        </p>
      </div>
    </div>
  );
}

export default Error;

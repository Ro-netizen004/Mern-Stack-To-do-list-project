const RateLimitedUI = () => {
  return (
    <div className="flex justify-center items-center px-4 py-12">
      <div className="bg-error/10 border border-error text-error-content max-w-xl w-full rounded-xl p-6 shadow-sm text-center">
        <h2 className="text-xl font-semibold text-white">Too Many Requests</h2>
        <p className="mt-2 text-sm text-white">
          You've exceeded the request limit for now. Please wait a little while before trying again.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;
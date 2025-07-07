const LoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh] p-6">
      <div className="bg-base-200 rounded-xl p-8 shadow-md text-center text-base-content/90 max-w-md w-full">
        <svg
          className="mx-auto animate-spin h-12 w-12 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <h2 className="mt-6 text-xl font-semibold">Loading your tasks...</h2>
        <p className="mt-2 text-sm text-base-content/70 max-w-xs mx-auto">
          Please wait while we fetch your data from the server. This should only take a few seconds.
        </p>
      </div>
    </div>
  );
};

export default LoadingState;

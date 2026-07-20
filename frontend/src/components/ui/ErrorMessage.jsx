function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
      <div className="mb-4 text-4xl">
        ⚠️
      </div>

      <h3 className="mb-2 text-lg font-semibold text-red-700">
        Unable to Load Data
      </h3>

      <p className="mb-5 text-red-600">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
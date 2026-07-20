function Loader({ message = "Loading..." }) {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

        <p className="text-gray-500">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Loader;
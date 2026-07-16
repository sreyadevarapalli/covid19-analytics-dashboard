import { FaExclamationTriangle } from "react-icons/fa";

function ErrorMessage({
  message = "Something went wrong.",
}) {
  return (
    <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-center">
      <FaExclamationTriangle className="mx-auto text-4xl text-red-600" />

      <p className="mt-4 font-semibold text-red-700">
        {message}
      </p>
    </div>
  );
}

export default ErrorMessage;
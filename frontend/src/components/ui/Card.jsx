function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
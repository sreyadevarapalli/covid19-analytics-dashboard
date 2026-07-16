function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-6 py-3 font-semibold transition ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
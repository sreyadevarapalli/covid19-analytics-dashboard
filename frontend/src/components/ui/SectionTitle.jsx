function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-slate-800">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
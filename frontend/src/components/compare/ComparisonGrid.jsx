function ComparisonGrid({ children }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {children}
    </div>
  );
}

export default ComparisonGrid;
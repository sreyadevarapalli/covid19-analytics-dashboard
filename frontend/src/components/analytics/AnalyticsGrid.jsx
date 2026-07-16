function AnalyticsGrid({ children }) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      {children}
    </div>
  );
}

export default AnalyticsGrid;
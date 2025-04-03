export function Card({ children, className = "" }) {
    return (
      <div className={`p-4 border rounded-lg shadow-sm ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="text-gray-800">{children}</div>;
  }
  
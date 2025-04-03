export function Button({ children, onClick, variant = "default" }) {
    const baseStyle = "px-4 py-2 rounded-lg transition";
    const styles = {
      default: "bg-black text-white hover:bg-grey-600",
      ghost: "bg-transparent text-gray-700 hover:bg-grey-200",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyle} ${styles[variant]}`}>
        {children}
      </button>
    );
  }
  
export function Input({ value, onChange, placeholder }) {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
    );
  }
  
import { useState } from "react";

export default function TwInput({ type = "text", defaultValue = "", placeholder }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

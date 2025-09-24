import { useState } from "react";

export default function TwCheckbox({ name, defaultChecked = false, label }) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
    
  )
}
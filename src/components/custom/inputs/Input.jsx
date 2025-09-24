import styles from "@styles/input.module.css";
import { useId, useState } from "react";

export default function Input({ type = "text", defaultValue = "", placeholder , label}) {
  const id = useId();
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${styles.inputField} ${value ? "filled" : ""}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    
  )
}

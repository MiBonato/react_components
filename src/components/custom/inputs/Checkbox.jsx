import styles from "@styles/checkbox.module.css";
import { useId, useState } from "react";

export default function Checkbox({ name, defaultChecked = false, label }) {
  const id = useId();
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    
  )
}
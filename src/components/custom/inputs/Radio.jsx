import styles from "@styles/radio.module.css";
import { useId, useState } from "react";

export default function Radio({ name, defaultChecked = false, label }) {
  const id = useId();
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={styles.radioContainer}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    
  )
}

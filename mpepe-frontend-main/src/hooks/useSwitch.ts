import { useState } from "react";

export default function useSwitch(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const set = (newValue: boolean) => setValue(newValue);
  const toggle = () => setValue((prevValue) => !prevValue);
  const on = () => setValue(true);
  const off = () => setValue(false);

  return { value, toggle, set, on, off };
}

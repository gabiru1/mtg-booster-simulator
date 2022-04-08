import { useSets } from "../../hooks/useSets";
import "./SetsDropDown.css";

interface ISetsDropdownProps {
  onChange: (value: string) => void;
}

export default function SetsDropdown({ onChange }: ISetsDropdownProps) {
  const { data } = useSets();

  return (
    <div>
      <select onChange={({ target }) => onChange(target.value)}>
        {data.map((set) => (
          <option value={set.code} key={set.code}>
            {set.name}, {set.code}
          </option>
        ))}
      </select>
    </div>
  );
}

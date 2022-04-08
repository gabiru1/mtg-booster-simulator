import { ISet } from "../../interfaces";
import "./SetsDropDown.css";

interface ISetsDropdownProps {
  sets: ISet[];
  set: string;
  onChange: (value: string) => void;
}

export default function SetsDropdown({
  sets,
  set,
  onChange,
}: ISetsDropdownProps) {
  return (
    <div>
      <select value={set} onChange={({ target }) => onChange(target.value)}>
        {sets.map((set) => (
          <option value={set.code} key={set.code}>
            {set.name}, {set.code}
          </option>
        ))}
      </select>
    </div>
  );
}

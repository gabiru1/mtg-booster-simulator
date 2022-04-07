import { ISet } from "../../interfaces";

interface ISetsDropdownProps {
  sets: ISet[];
  onChange: (value: string) => void;
}

export default function SetsDropdown({ sets, onChange }: ISetsDropdownProps) {
  return (
    <div>
      <select
        value={sets[0].code}
        onChange={({ target }) => onChange(target.value)}
      >
        {sets.map((set) => (
          <option value={set.code} key={set.code}>
            {set.name}, {set.code}
          </option>
        ))}
      </select>
    </div>
  );
}

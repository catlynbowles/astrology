type DropdownProps = {
  items: string[];
  setChange: (e: string) => void;
  placeholder: string;
};

export default function Dropdown({
  items,
  setChange,
  placeholder,
}: DropdownProps) {
  return (
    <select onChange={(e) => setChange(e.target.value)} required>
      <option value="">{placeholder}</option>
      {items.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}

type DropdownProps = {
  items: string[];
  setSign: (e: string) => void;
  placeholder: string;
};

export default function Dropdown({
  items,
  setSign,
  placeholder,
}: DropdownProps) {
  return (
    <select onChange={(e) => setSign(e.target.value)} required>
      <option value="">{placeholder}</option>
      {items.map((item, index) => (
        <option value={item} key={index}>{item}</option>
      ))}
    </select>
  );
}

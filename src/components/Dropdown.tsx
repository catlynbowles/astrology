type DropdownProps = {
  placeholder: string;
  setSign: (e: string) => void;
  zodiacs: string[];
};

export default function Dropdown({ placeholder, setSign, zodiacs }: DropdownProps) {
  return (
    <select onChange={(e) => setSign(e.target.value)} required>
      <option value="">{placeholder}</option>
      {zodiacs.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
}

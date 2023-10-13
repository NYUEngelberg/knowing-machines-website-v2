type Props = {
  value: string;
};

export default function ConfidenceRange({ value }: Props) {
  const valTextMapping: Record<string, string> = {
    "1": "Very unsure",
    "2": "Unsure",
    "3": "Neutral",
    "4": "High",
    "5": "Very high",
  };
  return (
    <span className="flex flex-row gap-[10px] px-4">
      {Object.keys(valTextMapping).map((val) => (
        <span
          key={val}
          className={
            "pl-[3.6px] pr-[2px] " + (val === value ? "text-white bg-black" : "")
          }
        >
          {val}
        </span>
      ))}
      <span className="font-normal normal-case">{valTextMapping[value]}</span>
    </span>
  );
}

type Props = {
  total: number;
  i: number;
  bottom?: boolean;
  orderDesc?: boolean;
};

export default function PartialBulkyBorder({
  total,
  i,
  bottom = true,
  orderDesc = true,
}: Props) {
  return (
    <div
      className={
        "absolute h-[3px] left-0 bg-black " +
        (bottom ? " bottom-[-3px] " : " top-0 ")
      }
      style={{ width: ((total - i - 1) * 100) / total + "%" }}
    ></div>
  );
}

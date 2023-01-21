interface IProps {
  name: string;
  color?: string;
}
export default function Tag(props: IProps) {
  const { name, color = "none" } = props;

  return (
    <div
      className={`${
        color === "none" ? name.toLowerCase() : color.toLowerCase()
      } py-1 px-3 min-w-fit rounded-sm select-none max-w-fit`}
    >
      <h1 className="font-medium text-white">{name}</h1>
    </div>
  );
}

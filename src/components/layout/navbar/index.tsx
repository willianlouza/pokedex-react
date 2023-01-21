import Image from "next/image";
import Link from "next/link";
interface IProps {
  pokemonType: string;
}
export default function Navbar(props: IProps) {
  const { pokemonType } = props;
  return (
    <div className="fixed z-40 top-0 left-0 pb-2 w-full h-14 bg-gray-700">
      <div
        className={`${
          pokemonType === "none" ? "bg-red-600" : pokemonType
        } w-full h-full flex place-content-center place-items-center`}
      >
        <Link href="/" className="group">
          <Image
            className="rotate-45 group-hover:rotate-0 transition-transform duration-150"
            src="/images/pokeball.png"
            alt="logo"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
}

import { toRange01 } from "../../utils/formatter";
import { motion } from "framer-motion";

interface IProps {
  stat: { name: string; value: number };
}
export default function Stat(props: IProps) {
  const { value, name } = props.stat;
  const colorClass = name.split(" ").join("-").toLocaleLowerCase();
  if (!value) return null;
  return (
    <div>
      <h1 className="font-semibold">{name.toUpperCase()}</h1>
      <div className="relative shadow-inner h-8 overflow-hidden bg-gray-300 w-72 rounded-lg">
        <span className="absolute right-2 text-2xl text-gray-500 font-semibold">{value}</span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{scaleX:toRange01(value, 0, 180)}}
          transition={{duration: 0.5}}
          className={`${colorClass} h-full w-full origin-left rounded-lg`}
        ></motion.div>
      </div>
    </div>
  );
}

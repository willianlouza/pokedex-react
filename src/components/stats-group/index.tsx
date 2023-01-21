import Stat from "../stat";

interface IProps {
  stats: [{ name: string; value: number }];
}
export default function StatsGroup(props: IProps) {
  const { stats } = props;

  return (
    <div>
      {stats.map((item, index) => {
        return <Stat key={index} stat={item} />;
      })}
    </div>
  );
}

import IPokemon from "@/interfaces/pokemon";
import { zeroBefore } from "@/utils/formatter";
import Tag from "../tag";

interface IProps {
  pokemon: IPokemon;
}
export default function PokemonDataInspector(props: IProps) {
  const { pokemon } = props;
  return (
    <table className="w-96">
      <tbody className="text-left">
        <tr>
          <th>ID</th>
          <td>#{zeroBefore(pokemon.id)}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{pokemon.height / 10}m</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{pokemon.weight / 10}Kg</td>
        </tr>
        <tr>
          <th>Type</th>
          <td className="flex gap-2">
            {pokemon.types.map((type, i) => {
              return <Tag name={type} key={i} />;
            })}
          </td>
        </tr>
        <tr>
          <th>Abilities</th>
          <td className="flex gap-2 flex-wrap place-content-end">
            {pokemon.abilities.map((ability, i) => {
              return <Tag name={ability} key={i} color={pokemon.types[0]} />;
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

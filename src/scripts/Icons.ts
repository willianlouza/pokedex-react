import bug from "../assets/icons/bug.svg";
import dark from "../assets/icons/dark.svg";
import dragon from "../assets/icons/dragon.svg";
import electric from "../assets/icons/electric.svg";
import fairy from "../assets/icons/fairy.svg";
import fighting from "../assets/icons/fighting.svg";
import fire from "../assets/icons/fire.svg";
import flying from "../assets/icons/flying.svg";
import ghost from "../assets/icons/ghost.svg";
import grass from "../assets/icons/grass.svg";
import ground from "../assets/icons/ground.svg";
import ice from "../assets/icons/ice.svg";
import normal from "../assets/icons/normal.svg";
import poison from "../assets/icons/poison.svg";
import psychic from "../assets/icons/psychic.svg";
import rock from "../assets/icons/rock.svg";
import steel from "../assets/icons/steel.svg";
import water from "../assets/icons/water.svg";

export default function icon(type: string): string {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;

    default:
      return "";
  }
}

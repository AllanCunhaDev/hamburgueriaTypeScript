import { BiSearch } from "react-icons/bi";
import { DivSearch } from "./StyledinputHeader";

interface iInputHeader {
  type: string;
  placeholder: string;
}

export const InputHeader = ({ type, placeholder }: iInputHeader) => {
  return (
    <DivSearch>
      <input type={type} placeholder={placeholder} />
      <button>
        <BiSearch />
      </button>
    </DivSearch>
  );
};

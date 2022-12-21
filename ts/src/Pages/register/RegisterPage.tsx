import { FormsRegister } from "../../Components/forms/FormRegister";
import img1 from "../../Components/img/Logo.svg";
import img3 from "../../Components/img/Boleans.svg";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { ContainerRegister } from "./StyleRegisterPage";



export const RegisterPage = () => {
  return (
    <ContainerRegister>
      <FormsRegister />
      <div>
        <img className="logo" src={img1} alt="Logo" />
        <div>
          <p>
            <div>
              <HiOutlineClipboardCheck />
            </div>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </div>
        <img className="boleans" src={img3} alt="img" />
      </div>
    </ContainerRegister>
  );
};


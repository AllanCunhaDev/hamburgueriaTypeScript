
import { FormsLogin } from "../../Components/forms/FormLogin";
import img1 from "../../Components/img/Logo.svg";
import img3 from "../../Components/img/Boleans.svg";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { ContainerGeral } from "../login/StyleLoginPage";


export const LoginPage = () => {

  return (
    <ContainerGeral>
      <FormsLogin />
      <div>
        <img className="logo" src={img1} alt="logo" />
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
    </ContainerGeral>
  );
};

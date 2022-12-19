import { InputStyle } from "./Styleinputs";

interface Iinput {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  register: any;
  error: string;
  disabled: boolean;
}

export const Input = ({ id, type, placeholder, register, label,error,disabled }: Iinput) => {
  return (
    <InputStyle>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        register={register}
        error={error}
        disabled={disabled}

      />
    </InputStyle>
  );
};

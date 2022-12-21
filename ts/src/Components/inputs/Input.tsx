import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputStyle } from "./Styleinputs";

export interface iInputProps {
  id: string;
  type: string;
  placeholder: string;
  label?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  disabled: boolean;
}

export const Input = ({
  id,
  type,
  placeholder,
  register,
  label,
  error,
  disabled,
}: iInputProps) => {
  return (
    <InputStyle>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      />
      {error && <p>{error.message}</p>}
    </InputStyle>
  );
};

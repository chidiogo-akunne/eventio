import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Colors from "../../../constants/colors";

import { Input, InputCover, Label } from "./styles";

//typings for input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name?: string;
  inputClass?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  errorIndicator?: boolean;
}

export default function InputComponent(props: InputProps) {
  const {
    type,
    placeholder,
    name,
    inputClass,
    value,
    onChange,
    error,
    errorIndicator,
  } = props;
  const [visible, setVisible] = useState(true);

  //toggle password visibility
  const showPassword = () => {
    setVisible(!visible);
  };

  //input component
  return (
    <InputCover style={{ marginBottom: error?.length ? "0.5rem" : "2.5rem" }}>
      <Label style={{ top: value ? "-0.8rem" : "-0.4rem" }}>
        <label htmlFor={name}>{placeholder}</label>
        {type === "password" ? (
          <>
            {visible ? (
              <AiFillEyeInvisible
                color={Colors.icon}
                size={20}
                onClick={showPassword}
              />
            ) : (
              <AiFillEye color={Colors.icon} size={20} onClick={showPassword} />
            )}
          </>
        ) : null}
      </Label>
      <Input
        type={visible ? type : "text"}
        id={name}
        name={name}
        value={value}
        className={inputClass}
        onChange={onChange}
        style={{
          borderColor: errorIndicator ? Colors.violetRed : Colors.lightGrey,
        }}
      />
      {error && <p className="error">{`${placeholder} ${error}`}</p>}
    </InputCover>
  );
}

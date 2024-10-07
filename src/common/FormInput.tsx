import { Controller } from "react-hook-form";
// import { useAppSelector } from 'store';
// import { customizerStateSelector } from 'store/customizer/CustomizerSlice';
import Input from "./Input.tsx";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormInput = (props: any) => {
  // const inputSize = useAppSelector((state) => customizerStateSelector(state, 'inputSize'));
  const {
    name,
    control,
    disable,
    required,
    rulesProps,
    className,
    max,
    min,
    onValueChange,
    validate,
    placeholder,
    type,
    ...inputProps
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let rules: any = {};
  if (required) {
    if (typeof required === "string") {
      rules.required = required;
    } else {
      rules.required = `${
        inputProps.label ? `${inputProps.label} is` : ""
      } required`;
    }
  }
  if (validate) {
    rules.validate = validate;
  }
  if (rulesProps) {
    rules = { ...rules, ...rulesProps };
  }

  return (
    <Controller
      control={control}
      {...(Object.keys(rules).length > 0
        ? {
            rules,
          }
        : { rules: undefined })}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const on_Change = (e: any) => {
          onChange(e);
          if (onValueChange) {
            onValueChange(e);
          }
        };
        return (
          <Input
            disabled={disable}
            className={className}
            value={value}
            // size={inputSize}
            max={max}
            min={min}
            placeholder={placeholder}
            error={error}
            type={type}
            required={rules.required ? true : false}
            onChange={on_Change}
            onBlur={onBlur}
            {...inputProps}
          />
        );
      }}
      name={name}
    />
  );
};
export default FormInput;

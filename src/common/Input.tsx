import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
// import { IconEye, IconSearch } from "@tabler/icons-react";
// import { IconEyeOff } from "@tabler/icons-react";
import React from "react";
// import { useAppSelector } from "store";
// import { customizerStateSelector } from 'store/customizer/CustomizerSlice';

const Input = (props: any) => {
  // const inputSize = useAppSelector((state) => customizerStateSelector(state, 'inputSize'));
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const {
    type,
    value,
    onChange,
    className,
    onBlur,
    max,
    min,
    error,
    ...inputProps
  } = props;
  return (
    <FormControl fullWidth>
      <TextField
        size={"small"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        error={Boolean(error)}
        type={type === "password" ? (showPassword ? "text" : type) : type}
        // {...(type === "password" && {
        //   InputProps: {
        //     endAdornment: (
        //       <InputAdornment position="end">
        //         <IconButton
        //           aria-label="toggle password visibility"
        //           onClick={handleClickShowPassword}
        //           onMouseDown={handleMouseDownPassword}
        //           edge="end"
        //         >
        //           {showPassword ? (
        //             <IconEyeOff size="20" />
        //           ) : (
        //             <IconEye size="20" />
        //           )}
        //         </IconButton>
        //       </InputAdornment>
        //     ),
        //   },
        // })}
        // {...(type === "search" && {
        //   InputProps: {
        //     startAdornment: (
        //       <InputAdornment position="start">
        //         <IconSearch size={"16"} />
        //       </InputAdornment>
        //     ),
        //   },
        // })}
        {...inputProps}
      />
      {error && (
        <FormHelperText sx={{ color: "error.main" }}>
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;

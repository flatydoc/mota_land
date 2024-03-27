import React, { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import styles from "./Form.module.scss";
import {
  TextField,
  Autocomplete,
  Box,
  styled,
  Button as MUIButton,
} from "@mui/material";

import {
  Alert,
  AlertTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  Snackbar,
} from "@mui/material";
import { theme } from "@/core/utils/theme";
import { countries } from "@/core/constants";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { send } from "@/core/services/form.service";
import Image from "next/image";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  country: {
    code: string;
    label: string;
    phone: string;
    suggested: boolean;
  };
  text: string;
  file: FileList | null;
};

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [fileName, setFileName] = useState(""); // Step 1: Add state to store file name

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      // setOpenSuccess(false);
      // setOpenError(false);
      return;
    }
    setOpenError(false);
    setOpenSuccess(false);
  };

  const load = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const showSuccess = () => {
    setOpenSuccess(true);
  };

  const showError = () => {
    setOpenError(true);
  };

  const defaultValues: FormValues = {
    name: "",
    surname: "",
    email: "",
    country: {
      code: "",
      label: "",
      phone: "",
      suggested: false,
    },
    text: "",
    file: null,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<FormValues>({ defaultValues });

  const getFormErrorMessage = (error: keyof FormValues) => {
    return errors[error] ? (
      <small className="p-error">{errors[error]?.message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    load();
    const formData = new FormData();
    if (data.file && data.file[0]) {
      formData.append("file", data.file[0]);
    }
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("text", data.text);
    formData.append("country", data.country.label);
    try {
      await send(formData);
      setTimeout(() => {
        showSuccess();
        reset();
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
    textOverflow: "ellipsis",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formWrapper}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Please enter your name" }}
          render={({ field, fieldState }) => (
            <FormControl
              className={styles.name}
              error={Boolean(fieldState.error)}
              variant="standard">
              <InputLabel
                htmlFor={field.name}
                disableAnimation
                style={{
                  position: "static",

                  transform: "none",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32.68px",
                  color: "#0A5F88",
                }}>
                Name
              </InputLabel>
              <TextField
                fullWidth
                error={Boolean(fieldState.error)}
                placeholder="John"
                id={field.name}
                value={field.value}
                aria-describedby="component-error-text"
                onChange={(e) => field.onChange(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      outline: "none",
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: Boolean(fieldState.error)
                        ? theme.palette.error.main
                        : "transparent",
                      boxShadow: "0px 2px 6px 0px #3F3F3F29",
                      fontSize: 20,
                      padding: "10px 12px",
                    },
                  },
                }}
              />
              <FormHelperText id="component-error-text">
                {getFormErrorMessage(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="surname"
          control={control}
          rules={{ required: "Please enter your surname" }}
          render={({ field, fieldState }) => (
            <FormControl
              className={styles.surname}
              error={Boolean(fieldState.error)}
              variant="standard">
              <InputLabel
                htmlFor={field.name}
                disableAnimation
                style={{
                  position: "static",
                  transform: "none",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32.68px",
                  color: "#0A5F88",
                }}>
                Surname
              </InputLabel>
              <TextField
                fullWidth
                error={Boolean(fieldState.error)}
                placeholder="Doe"
                id={field.name}
                value={field.value}
                aria-describedby="component-error-text"
                onChange={(e) => field.onChange(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      outline: "none",
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: Boolean(fieldState.error)
                        ? theme.palette.error.main
                        : "transparent",
                      boxShadow: "0px 2px 6px 0px #3F3F3F29",
                      fontSize: 20,
                      padding: "10px 12px",
                    },
                  },
                }}
              />
              <FormHelperText id="component-error-text">
                {getFormErrorMessage(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address.",
            },
          }}
          render={({ field, fieldState }) => (
            <FormControl
              className={styles.email}
              error={Boolean(fieldState.error)}
              variant="standard">
              <InputLabel
                htmlFor={field.name}
                disableAnimation
                style={{
                  position: "static",
                  transform: "none",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32.68px",
                  color: "#0A5F88",
                }}>
                Email
              </InputLabel>
              <TextField
                fullWidth
                error={Boolean(fieldState.error)}
                placeholder="username@gmail.com"
                id={field.name}
                value={field.value}
                aria-describedby="component-error-text"
                onChange={(e) => field.onChange(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      outline: "none",
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: Boolean(fieldState.error)
                        ? theme.palette.error.main
                        : "transparent",
                      boxShadow: "0px 2px 6px 0px #3F3F3F29",
                      fontSize: 20,
                      padding: "10px 12px",
                    },
                  },
                }}
              />
              <FormHelperText id="component-error-text">
                {getFormErrorMessage(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="country"
          control={control}
          rules={{ required: "Please select your country" }}
          render={({ field, fieldState }) => (
            <FormControl
              className={styles.country}
              error={Boolean(fieldState.error)}
              variant="outlined"
              fullWidth>
              <InputLabel
                htmlFor={field.name}
                style={{
                  position: "static",
                  transform: "none",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32.68px",
                  color: "#0A5F88",
                }}>
                Country
              </InputLabel>
              <Autocomplete
                fullWidth
                popupIcon={
                  <KeyboardArrowDownRounded
                    fontSize="large"
                    sx={{
                      color: "#0A5F88",
                    }}
                  />
                }
                id={field.name}
                options={countries}
                autoHighlight
                onChange={(_, value) => field.onChange(value)}
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    key={option.label}
                    {...props}>
                    <Image
                      loading="lazy"
                      width={20}
                      height={10}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt={`${option.label} flag`}
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    aria-describedby="component-error-text"
                    placeholder="Country"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          outline: "none",
                          borderRadius: "16px",
                          border: "1px solid",
                          borderColor: Boolean(fieldState.error)
                            ? theme.palette.error.main
                            : "transparent",
                          boxShadow: "0px 2px 6px 0px #3F3F3F29",
                          fontSize: 20,
                          padding: "10px 12px",
                        },
                      },
                    }}
                  />
                )}
              />
              <FormHelperText
                id="component-error-text"
                sx={{
                  margin: "3px 0 0 0 ",
                }}>
                {getFormErrorMessage(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="text"
          control={control}
          rules={{
            maxLength: {
              value: 1500,
              message: "max 1500 symbols",
            },
          }}
          render={({ field, fieldState }) => (
            <FormControl
              className={styles.text}
              error={Boolean(fieldState.error)}
              variant="standard">
              <InputLabel
                htmlFor={field.name}
                disableAnimation
                style={{
                  position: "static",
                  transform: "none",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32.68px",
                  color: "#0A5F88",
                }}>
                Cover Letter
              </InputLabel>
              <TextField
                fullWidth
                error={Boolean(fieldState.error)}
                placeholder="Type something to present yourself"
                multiline
                rows={11}
                id={field.name}
                value={field.value}
                aria-describedby="component-error-text"
                onChange={(e) => field.onChange(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      outline: "none",
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: Boolean(fieldState.error)
                        ? theme.palette.error.main
                        : "transparent",
                      boxShadow: "0px 2px 6px 0px #3F3F3F29",
                      fontSize: 20,
                      padding: "10px 12px",
                    },
                  },
                }}
              />
              <span
                className={styles.helper}
                style={{
                  color:
                    field.value.length > 1500
                      ? theme.palette.error.main
                      : "inherit",
                  opacity: field.value.length > 1500 ? 1 : 0.4,
                }}>
                {field.value === ""
                  ? "max 1500 symbols"
                  : `${field.value.length}/1500`}
              </span>
              <FormHelperText id="component-error-text">
                {getFormErrorMessage(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="file"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl
              className={styles.file}
              error={Boolean(fieldState.error)}
              variant="standard">
              <InputLabel
                htmlFor={field.name}
                disableAnimation
                style={{
                  position: "static",
                  transform: "none",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32.68px",
                  color: "#0A5F88",
                }}>
                Upload CV
              </InputLabel>
              <MUIButton
                sx={{
                  textTransform: "capitalize",
                  width: "218px",
                  height: "56px",
                  padding: "11px 44px 11px 20px",
                  gap: "6px",
                  borderRadius: "16px",
                  border: "2px solid transparent",
                  backgroundColor: "transparent",
                  textOverflow: "ellipsis",
                  boxShadow: "0px 2px 6px 0px #3F3F3F29",
                  "&:hover, &focus": {
                    backgroundColor: "transparent",
                    border: "2px solid #19a4e8",
                    boxShadow: "0px 2px 6px 0px #3F3F3F29",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "#f7f7f7",
                    border: "2px solid #19a4e8",
                  },
                }}
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}>
                <Image
                  className={styles.clip}
                  src="/clip.svg"
                  alt="upload file icon"
                  width={48}
                  height={48}
                  priority
                />
                <span
                  style={{
                    fontSize: "24px",
                    lineHeight: "32.68px",
                    fontWeight: "400",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    color: "#21212180",
                  }}>
                  {fileName || "Your CV"}
                </span>
                <VisuallyHiddenInput
                  placeholder="Your CV"
                  id={field.name}
                  aria-describedby="component-error-text"
                  onChange={(e) => {
                    console.log(e);
                    field.onChange(e.target.files);
                    if (e.target.files) {
                      setFileName(e.target.files[0].name);
                    }
                  }}
                  type="file"
                />
              </MUIButton>
              <FormHelperText id="component-error-text">
                {getFormErrorMessage(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />
      </div>

      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}>
          <AlertTitle>Success</AlertTitle>
          Our specialist will contact you at soon
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}>
          <AlertTitle>Error</AlertTitle>
          Try again later or contact us in a way convenient for you
        </Alert>
      </Snackbar>
      <Button loading={isLoading} text="Send" type="submit" />
    </form>
  );
}

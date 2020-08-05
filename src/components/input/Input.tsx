import React, { useState, useEffect } from "react";

type Props = {
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (val: string) => void;
  required: boolean;
  chat: boolean;
};

export const Input: React.FunctionComponent<Props> = ({
  name,
  placeholder,
  value,
  onChange,
  required,
  chat,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputChanged, setInputChanged] = useState<boolean>(false);
  const [inputError, setInputError] = useState<{
    isEmpty?: boolean;
    isInvalid?: boolean;
  }>({});

  const changeHandler = (value: string) => {
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setInputChanged(true);

    if (!inputChanged) {
      return;
    }

    if (required && !inputValue) {
      setInputError({
        isEmpty: true,
      });
      return;
    }

    if (inputValue.match(/\s/g) && !chat) {
      setInputError({
        isEmpty: false,
        isInvalid: true,
      });
      return;
    }

    setInputError({
      isEmpty: false,
      isInvalid: false,
    });
  }, [inputChanged, inputValue, required, chat]);

  return (
    <div className="input">
      <div className="form-error">
        {inputError.isEmpty ? "This field is required:" : ""}
        {inputError.isInvalid ? "Entered value is invalid:" : ""}
      </div>
      <input
        name={name}
        type="text"
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={(event) => changeHandler(event.target.value)}
      />
    </div>
  );
};

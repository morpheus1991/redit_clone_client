import React, { FC } from "react";

interface Props {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
}
const InputGroup: FC<Props> = ({
  className,
  type = "text",
  placeholder = "",
  value,
  error,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        className="w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;

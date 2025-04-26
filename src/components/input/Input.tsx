"use client";
import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type TInput = {
  placeholder: string;
  id: string;
  type: HTMLInputTypeAttribute;
  label: string;
  hasLabel: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  name: string;
};

const Input = ({
  type,
  placeholder,
  id,
  label,
  hasLabel,
  value,
  onChange,
  name,
  required = true,
}: TInput) => {
  return (
    <div className="flex flex-col">
      {hasLabel && (
        <label htmlFor={id} className="my-1 ">
          {label}
        </label>
      )}
      <input
        value={value}
        id={id}
        placeholder={placeholder}
        type={type}
        className="w-full border p-2 rounded-md outline-offset-5 my-1"
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};

export default Input;

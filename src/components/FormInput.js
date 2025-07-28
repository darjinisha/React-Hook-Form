import React from "react";
import { Controller } from "react-hook-form";

function FormInput({
  name,
  label,
  control,
  rules,
  type = "text",
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              id={name}
              {...field}
              type={type}
              placeholder={placeholder}
              className={`w-full px-3 py-2 border rounded ${
                fieldState.invalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}

export default FormInput;

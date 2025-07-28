import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "./components/FormInput";

function App() {
  const { handleSubmit, control, reset } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setSubmittedData(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {!submittedData ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4">User Registration</h2>

          <FormInput
            name="name"
            label="Full Name"
            control={control}
            rules={{ required: "Name is required" }}
            placeholder="John Doe"
          />

          <FormInput
            name="email"
            label="Email"
            control={control}
            type="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            placeholder="john@example.com"
          />

          <FormInput
            name="password"
            label="Password"
            control={control}
            type="password"
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            }}
            placeholder="password"
          />

          <FormInput
            name="age"
            label="Age"
            control={control}
            type="number"
            rules={{ required: "Age is required" }}
            placeholder="25"
          />

          {/* Gender Radio Buttons */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Gender is required" }}
              render={({ field, fieldState }) => (
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      value="Male"
                      {...field}
                      checked={field.value === "Male"}
                      onChange={() => field.onChange("Male")}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      value="Female"
                      {...field}
                      checked={field.value === "Female"}
                      onChange={() => field.onChange("Female")}
                      className="form-radio text-pink-500"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="Other"
                      {...field}
                      checked={field.value === "Other"}
                      onChange={() => field.onChange("Other")}
                      className="form-radio text-gray-600"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                  {fieldState.error && (
                    <p className="text-red-600 text-sm mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <FormInput
            name="phone"
            label="Phone Number"
            control={control}
            rules={{
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a 10-digit phone number",
              },
            }}
            placeholder="9876543210"
          />

          <FormInput
            name="bio"
            label="Short Bio"
            control={control}
            rules={{ required: "Bio is required" }}
            placeholder="Tell us about yourself"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Form Submitted Successfully!
          </h2>
          <p className="text-gray-700 mb-2">Here is your submitted data:</p>
          <pre className="text-left bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;

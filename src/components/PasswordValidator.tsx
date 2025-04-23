import { useState } from "react";
import "./PasswordValidator.css";

interface PasswordValidation {
  hasNumber: boolean;
  hasSpecialChar: boolean;
  hasUppercase: boolean;
  noConsecutiveLetters: boolean;
}

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState<PasswordValidation>({
    hasNumber: false,
    hasSpecialChar: false,
    hasUppercase: false,
    noConsecutiveLetters: false,
  });

  const validatePassword = (value: string) => {
    setValidation({
      hasNumber: /[0-9]/.test(value),
      hasSpecialChar: /[!@#$%^&*]/.test(value),
      hasUppercase: /[A-Z]/.test(value),
      noConsecutiveLetters: !/([a-zA-Z])\1/.test(value),
    });
    setPassword(value);
  };

  return (
    <>
      <h2 className="title">Password Component</h2>
      <div className="container">
        <input
          className="password-input"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          placeholder="Enter password"
        />
        <div>
          <div
            className={`requirement ${
              validation.hasNumber ? "valid" : "invalid"
            }`}
          >
            <span className="">{validation.hasNumber ? "✓" : "✗"}</span>
            Has a number 0-9
          </div>
          <div
            className={`requirement ${
              validation.hasSpecialChar ? "valid" : "invalid"
            }`}
          >
            <span>{validation.hasSpecialChar ? "✓" : "✗"}</span>
            Has a special char !@#$%^&*
          </div>
          <div
            className={`requirement ${
              validation.hasUppercase ? "valid" : "invalid"
            }`}
          >
            <span>{validation.hasUppercase ? "✓" : "✗"}</span>
            Has uppercase Letter
          </div>
          <div
            className={`requirement ${
              validation.noConsecutiveLetters ? "valid" : "invalid"
            }`}
          >
            <span>{validation.noConsecutiveLetters ? "✓" : "✗"}</span>
            No consecutive letters
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordValidator;

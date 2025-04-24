import { LABELS } from "@src/constants";
import { PasswordProps, PasswordRequirements } from "@src/types";
import { useState } from "react";
import "./Password.css";

const Password = ({ requirements, styles }: PasswordProps) => {
  const [inputPassword, setInputPassword] = useState("");

  const getValidation = (input: string): PasswordRequirements => {
    const newValidation: PasswordRequirements = {};
    if (requirements.hasSpecialChar) {
      newValidation.hasSpecialChar = /[!@#$%^&*]/.test(input);
    }
    if (requirements.hasNumber) {
      newValidation.hasNumber = /[0-9]/.test(input);
    }
    if (requirements.hasUppercase) {
      newValidation.hasUppercase = /[A-Z]/.test(input);
    }
    if (requirements.noConsecutiveLetters) {
      newValidation.noConsecutiveLetters =
        !/([a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|;':",./<>?`~\\\\])\1/.test(input);
    }
    return newValidation;
  };

  return (
    <>
      <h2 className="title">Password Component</h2>
      <div className="container">
        <input
          className="password-input"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter password"
        />
        <div>
          {Object.entries(requirements).map(([requirement]) => {
            const key = requirement as keyof PasswordRequirements;
            const isValid = getValidation(inputPassword)[key];
            return (
              <div
                key={requirement}
                className={`requirement ${
                  isValid
                    ? styles?.valid || "valid"
                    : styles?.invalid || "invalid"
                }`}
              >
                <span>{isValid ? "✓" : "✗"}</span>
                {LABELS[key]}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Password;

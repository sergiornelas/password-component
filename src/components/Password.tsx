import { PasswordProps, PasswordRequirements } from "@src/types";
import { useState } from "react";
import "./Password.css";

const Password = ({ requirements, styles }: PasswordProps) => {
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState<PasswordRequirements>({
    hasSpecialChar: false,
    hasNumber: false,
    hasUppercase: false,
    noConsecutiveLetters: false,
  });

  const validatePassword = (value: string) => {
    const newValidation: PasswordRequirements = {};
    if (requirements.hasSpecialChar) {
      newValidation.hasSpecialChar = /[!@#$%^&*]/.test(value);
    }
    if (requirements.hasNumber) {
      newValidation.hasNumber = /[0-9]/.test(value);
    }
    if (requirements.hasUppercase) {
      newValidation.hasUppercase = /[A-Z]/.test(value);
    }
    if (requirements.noConsecutiveLetters) {
      newValidation.noConsecutiveLetters =
        !/([a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|;':",./<>?`~\\\\])\1/.test(value);
    }
    setValidation(newValidation);
    setPassword(value);
  };

  const getRequirementLabel = (key: keyof PasswordRequirements) => {
    const labels: Record<keyof PasswordRequirements, string> = {
      hasNumber: "Has a number 0-9",
      hasSpecialChar: "Has a special char !@#$%^&*",
      hasUppercase: "Has uppercase Letter",
      noConsecutiveLetters: "No consecutive letters",
    };
    return labels[key];
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
          {Object.entries(requirements).map(([requirement, enabled]) => {
            if (!enabled) return null;
            const passwordRequirement =
              requirement as keyof PasswordRequirements;
            return (
              <div
                key={requirement}
                className={`requirement ${
                  validation[passwordRequirement]
                    ? styles?.valid || "valid"
                    : styles?.invalid || "invalid"
                }`}
              >
                <span>{validation[passwordRequirement] ? "✓" : "✗"}</span>
                {getRequirementLabel(passwordRequirement)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Password;

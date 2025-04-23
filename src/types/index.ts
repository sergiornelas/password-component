export interface PasswordRequirements {
  hasNumber?: boolean;
  hasSpecialChar?: boolean;
  hasUppercase?: boolean;
  noConsecutiveLetters?: boolean;
}

interface PasswordStyles {
  valid: string;
  invalid: string;
}

export interface PasswordProps {
  requirements: PasswordRequirements;
  styles?: PasswordStyles;
}

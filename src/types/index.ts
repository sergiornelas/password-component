export interface PasswordRequirements {
  hasSpecialChar?: boolean;
  hasNumber?: boolean;
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

export interface PasswordValidation {
  hasNumber: boolean;
  hasSpecialChar: boolean;
  hasUppercase: boolean;
  noConsecutiveLetters: boolean;
}

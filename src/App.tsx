import "./App.css";
import Password from "./components/Password";
import { PasswordRequirements } from "./types";

function App() {
  // Play with the options to see how the component behaves.
  const loginPasswordReqs: PasswordRequirements = {
    hasNumber: true,
    hasSpecialChar: true,
    hasUppercase: true,
    noConsecutiveLetters: true,
  };

  // Optionally, you can pass custom styles to the Password component using the
  // styles prop:

  // const customStyles = {
  //   valid: "new_valid",
  //   invalid: "new_invalid",
  // };

  return (
    <div className="App">
      <Password requirements={loginPasswordReqs} />
      {/* <Password requirements={loginPasswordReqs} styles={customStyles} /> */}
    </div>
  );
}

export default App;

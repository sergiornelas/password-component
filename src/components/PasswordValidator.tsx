import "./PasswordValidator.css";

const PasswordValidator = () => {
  return (
    <>
      <div className="container">
        <input className="password-input" placeholder="Enter password" />
        <div>
          <div className="requirement">
            <span className="">*</span>
            Has a number 0-9
          </div>
          <div className="requirement">
            <span>*</span>
            Has a special char !@#$%^&*
          </div>
          <div className="requirement">
            <span>*</span>
            Has uppercase Letter
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordValidator;

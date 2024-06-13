import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

// Should also add validation on submit, like in Login.jsx file
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  // const emailIsInvalid =
  //   didEdit.email && !enteredValues.email.includes('@');
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);

  // const passwordIsInvalid =
  //   didEdit.password && enteredValues.password.trim().length < 6;
  const passwordIsInvalid =
    didEdit.password &&
    !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    // setEnteredValues({
    //   email: '',
    //   password: '',
    // });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

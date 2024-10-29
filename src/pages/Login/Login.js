import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { createPage } from "../../utils/functions/createPage";
import { doLogin } from "../../utils/functions/doLogin";
import { doRegister } from "../../utils/functions/doRegister";
import "./Login.css";

let showLogin = true;

export const Login = () => {
  const div = createPage("login");

  const form = document.createElement("form");
  
  div.append(Button({
    text: "Registrate", 
    fnc: () => {
      showLogin = !showLogin;
      form.innerHTML = "";
      showLogin ? LoginForm(form) : RegisterForm(form);
      document.querySelector( ".button-toggle").textContent = showLogin ? 
      "Regitrate" : "Vuelve al login"
      if (showLogin) {
        form.removeEventListener("submit", doRegister);
      }
      else {
        form.removeEventListener("submit", doLogin)
      }
      form.addEventListener("sumbit" , showLogin ? doLogin : doRegister);
    },
    className: "button-toggle", 
  })
);

  form.addEventListener("sumbit" , doLogin);

  LoginForm(form);
  div.append(form);
};

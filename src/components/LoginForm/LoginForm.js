import "./LoginForm.css";
import { Button } from "../../components/Button/Button";

export const LoginForm = (form) => {
  form.className = "login-form";

  form.innerHTML = `
  <div class="input-container">
    <label>Email</label>
    <input type="email" required/>
  </div>
  <div class="input-container">
    <label>Contraseña</label>
    <input type="password" required/>
  </div>
  `;

  form.append(Button({ text: "Login", fnc: () => {}}));
};

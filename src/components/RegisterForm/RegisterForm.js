import "./RegisterForm.css";
import { Button } from "../../components/Button/Button";

export const RegisterForm = (form) => {
  form.className = "register-form";

  form.innerHTML = `
  <div class="input-container">
    <label>Email</label>
    <input type="email" required/>
  </div>
  <div class="input-container">
    <label>Contraseña</label>
    <input type="password" required/>
  </div>
  <div class="input-container">
    <label>Confirmar Contraseña</label>
    <input type="password" required/>
  </div>
  `;

  form.append(Button({ text: "Registrarse", fnc: () => {}}));
};

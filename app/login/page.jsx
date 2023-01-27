import { signIn, signOut } from "next-auth";
import style from "./login.css";

export default function LoginPage() {
  //const {data:session} = useSession();
  //if(session){

  return (
    <div>
      <div>
        <h2>Bienvenido a ALI-MIND</h2>
      </div>
      <div style={{display:"grid", textAlign: "center", justifyContent:"center"}}>
        <form action="/login" method="post">
        <div>
        <div style={{gap:"2rem"}}>
        <label for="first">Correo:</label>
        <input type="text" id="first" name="first" />
        </div>
        <div>
        <label for="last">Password:</label>
          <input
            type="password"
            id="pswrd"
            name="pswrd"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
          />
          <div>
          </div>
          <button type="submit" className="btnLogin btnEntrar">
            Entrar
          </button>
          </div>
        </div>
        </form>
      </div>
      <button type="submit" className="btnLogin btnReg">
        Registrarse
      </button>
    </div>
  );
  //} else{
  // return(
  //   <button onClick={()=> signIn()}>Iniciar sesion</button>
  // )
  //}
}

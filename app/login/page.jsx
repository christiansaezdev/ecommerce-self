import { signIn, signOut} from 'next-auth';
import style from './login.css'

export default function LoginPage() {
  //const {data:session} = useSession();
  //if(session){

  return (
    <div flex>
    <h2>Bienvenido a SELF💚</h2>
    <form action="/login" method="post">
    <label for="first">Correo:</label>
    <input type="text" id="first" name="first" />
    <label for="last">Last name:</label>
    <input
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."
  />
    <button type="submit" className='btnLogin btnEntrar'>Entrar</button>
  </form>
  <button type="submit" className='btnLogin btnReg'>Registrarse</button>
    </div>
  );
//} else{
 // return(
 //   <button onClick={()=> signIn()}>Iniciar sesion</button>
 // )
//}
}

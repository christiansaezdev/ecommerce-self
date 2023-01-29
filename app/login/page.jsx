import { signIn, signOut } from "next-auth";
import style from "./login.css";
import { Formik } from 'formik';


export default function LoginPage() {
  //const {data:session} = useSession();
  //if(session){

  return (
    <div class="columns is-3 is-centered">
    <div class="is-5 column">
    <p class="title">
        BIENVENIDO A TU PORTAL ALI-MIND
      </p>
    <div class="field m-12">
  <p class="control has-icons-left has-icons-right">
    <input required class="input" type="email" placeholder="Email"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input required class="input" type="password" placeholder="Password"/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field column">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>
</div>
</div>

  );
  //} else{
  // return(
  //   <button  ={()=> signIn()}>Iniciar sesion</button>
  // )
  //}
}

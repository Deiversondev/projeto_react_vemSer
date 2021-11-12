import {Formik} from 'formik';
import styles from './Formulario.module.css'
import { MdDeleteForever } from 'react-icons/fa';

function Formulario() {
    return (
        <div>

        
        <form action="">
            <div className={styles.title}>Cadastrar</div>
          <div className={styles.form}>

          <div className={styles.input}>
                <h4>Nome</h4>
                <input type="text" name="firstName" id="firstName" placeholder="Digite seu nome"/>   
           </div>

            
            <div className={styles.input}>
                <h4>Sobrenome</h4>
                <input type="text" name="lastName" id="lastName" placeholder="Digite seu sobrenome"/>
            </div>
           
           <div className={styles.input}>
                <h4>Email</h4>
                <input type="text" name="email" id="email" placeholder="Digite seu e-mail"/>
           </div>
            
            <div className={styles.input}>
                <h4>Endereço</h4>
                <input type="text" name="address" id="address"  placeholder="Digite seu endereço"/>
            </div>
            
            <div className={styles.input}>
                <h4>Telefone</h4>
               <input type="text" name="cellPhoneNumber" id="cellPhoneNumber" placeholder="Digite seu telefone"/>
            </div>

            <div className={styles.btn}>
                <button>Cadastrar</button>
            </div>
          </div>

          
        </form>





           
        </div>
    )
}

export default Formulario



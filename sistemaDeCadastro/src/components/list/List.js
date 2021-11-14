import styless from '../fomulario/Formulario.module.css'
import style from "../list/List.module.css"
import styles from "../card/Card.module.css"
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { useState } from 'react';

const List = ({values,formik,List,setUserList}) => {

  function removeUser(id){
      setUserList(List.filter(user => user.id !== id));
  }



  return (
  
    <>

{

    
      <div className={style.list}>
      <div className={style.header}>
        <strong>Lista de Cadastrados</strong>
      </div>
      <div className={style.body}>

      {
        List.length > 0 && (
          List.map(user => {
            return (

              <div>
              <div className={styles.container}>
              <div className={styles.card}>
                <div id={user.id}>
                  <div >
                    <strong>Nome completo: </strong>
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                  </div>
                  <div>
                    <strong>E-mail: </strong>
                    <span>{user.email}</span>
                  </div>
                  <div>
                    <strong>Endereço: </strong>
                    <span>{user.address}</span>
                  </div>
                  <div>
                    <strong>Número: </strong>
                    <span>{user.cellPhoneNumber}</span>
                  </div>
                </div>
                <div className={styles.btn}>
                  <button onClick={() => removeUser(user.id)} className={styles.delete} ><AiFillDelete className={styles.deleteIcon}/></button>
                  <button className={styles.edit}><AiFillEdit /></button>
                </div>
              </div>
            </div>


            {/* <form onSubmit={formik.handleSubmit}>
            <div className={styless.title}>Ediatr</div>
          <div className={styless.form}>

          <div className={styless.input}>
                <h4 htmlFor="firstName">Nome</h4>
                <input type="text" name="firstName" id="firstName" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.firstName}/>   
           </div>

            
            <div className={styless.input}>
                <h4 htmlFor="lastName">Sobrenome</h4>
                <input type="text" name="lastName" id="lastName" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.lastName}/>
            </div>
           
           <div className={styless.input}>
                <h4 htmlFor="email">Email</h4>
                <input type="text" name="email" id="email" placeholder="Digite seu e-mail" onChange={formik.handleChange} value={formik.values.email}/>
           </div>
            
            <div className={styless.input}>
                <h4 htmlFor="address">Endereço</h4>
                <input type="text" name="address" id="address"  placeholder="Digite seu endereço" onChange={formik.handleChange} value={formik.values.address} />
            </div>
            
            <div className={styless.input}>
                <h4 htmlFor="telefone">Telefone</h4>
               <input type="text" name="cellPhoneNumber" id="cellPhoneNumber" placeholder="Digite seu telefone" onChange={formik.handleChange} value={formik.values.cellPhoneNumber}/>
            </div>
            
            <div className={styless.btn}>
                <button type="submit">Editar</button>
            </div>
            
          </div>

          
        </form> */}

              
            </div>

            )
          })

          
        )
      }
        <div className={style.btn}>
          <button >Cadastrar Usuário</button>
        </div>
      </div>
    </div>

     
     
      }
    </>
   
  )
}

export default List

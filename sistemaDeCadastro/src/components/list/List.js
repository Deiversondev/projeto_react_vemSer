
import style from "../list/List.module.css"
import styles from "../card/Card.module.css"
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";

const List = ({List,setUserList}) => {

  function removeUser(id){
      setUserList(List.filter(user => user.id !== id));
  }


  return (

    <>
    
      <div className={style.list}>
      <div className={style.header}>
        <strong>Lista de Cadastrados</strong>
      </div>
      <div className={style.body}>

      {
        List.length > 0 && (
          List.map(user => {
            return (
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
            )
          })
        )
      }
        <div className={style.btn}>
          <button >Cadastrar Usuário</button>
        </div>
      </div>
    </div>

     
    
    </>
   
  )
}

export default List

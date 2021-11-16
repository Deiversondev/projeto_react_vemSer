import style from "../card/Card.module.css";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";

const Card = ({setButtonOne, setButtonTwo, setButtonThree, ChangeId,setList,list,user, formik, active}) => {

function remove(id){
    setList(list.filter(u => u.id !== id))
};

  function edit(id) {
    let userFound = list.find(u => u.id === id);
    formik.setValues(userFound);
    setButtonOne('Editar');
    setButtonTwo('Cancelar');
    setButtonThree('Salvar');
    active();
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div id={user.id}>
          <div>
            <strong>Nome completo: </strong>
            <span>{user.firstName + " " + user.lastName}</span>
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
        <div className={style.btn}>
          <button onClick={() => remove(user.id)} className={style.delete}><AiFillDelete className={style.deleteIcon}/></button>
          <button onClick={() => {edit(user.id);ChangeId(user.id)}} className={style.edit}><AiFillEdit /></button>
        </div>
      </div>
    </div>
  )
}

export default Card;
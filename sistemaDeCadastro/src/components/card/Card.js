import style from "../card/Card.module.css"
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";

const CardList = ({user}) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div>
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
          <button className={style.delete}><AiFillDelete className={style.deleteIcon}/></button>
          <button className={style.edit}><AiFillEdit /></button>
        </div>
      </div>
      {/* <div className={style.rigth}>
      </div> */}

    </div>
  )
}

export default CardList

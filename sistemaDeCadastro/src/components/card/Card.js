import style from "../card/Card.module.css"
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";

const CardList = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div>
          <div>
            <strong>Nome completo: </strong>
            <span>Brenoly Porto</span>
          </div>
          <div>
            <strong>E-mail: </strong>
            <span>brenolyporto@gmail.com</span>
          </div>
          <div>
            <strong>Endereço: </strong>
            <span>Rua que não existe, 000, Centro, Angelim - PE</span>
          </div>
          <div>
            <strong>Número: </strong>
            <span>(00) 9.0000-0000</span>
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

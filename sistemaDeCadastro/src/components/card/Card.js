import style from "../card/Card.module.css"
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";

const CardList = () => {
  return (
    <div className={style.container}>
      <div>
        <strong>Nome completo: </strong>
        <span>Brenoly Porto</span>
        <AiFillDelete />
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
  )
}

export default CardList

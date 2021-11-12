import Card from "../card/Card"
import style from "../list/List.module.css"

const List = () => {
  return (
    <div className={style.list}>
      <div className={style.header}>
        <strong>Lista de Cadastrados</strong>
      </div>
      <div className={style.body}>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default List

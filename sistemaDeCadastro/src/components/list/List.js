import Card from "../card/Card"
import style from "../list/List.module.css"
import Formulario from '../fomulario/Formulario';
import { useState } from "react";

const List = () => {

  let [activeList, setActiveList] = useState(true);

  const activeComponetForms = () => {
    setActiveList(false);
  }

  return (
    <>
    {
      activeList ?
      <div className={style.list}>
      <div className={style.header}>
        <strong>Lista de Cadastrados</strong>
      </div>
      <div className={style.body}>
        <Card />
        <Card />
        <Card />
        <div className={style.btn}>
          <button onClick={activeComponetForms}>Cadastrar Usuário</button>
        </div>
      </div>
    </div> : <Formulario />
    }
    
    </>
   
  )
}

export default List

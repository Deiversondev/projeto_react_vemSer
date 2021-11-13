import Card from "../card/Card"
import style from "../list/List.module.css"
import Formulario from '../fomulario/Formulario';
import { useState } from "react";
import { useFormik } from 'formik';

const List = () => {

  let [activeList, setActiveList] = useState(true);

  const activeComponetForms = () => {
    setActiveList(false);
  }

  const [userId, setId] = useState(1);
  const [userList, setUserList] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      cellPhoneNumber: ''
    },
    onSubmit: values => {
      values.id = userId;
      setId(userId + 1);
      userList.push({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        address: values.address,
        cellPhoneNumber: values.cellPhoneNumber
      })
      formik.resetForm();
      console.log(values);
      console.log(userList)

    }
  })



  return (
    <>
      <div className={style.list}>
        <div className={style.header}>
          <strong>Lista de Cadastrados</strong>
        </div>
        <div className={style.body}>

          {userList.length ?
           userList.map(user=>{
             return(
              <Card user={user} />
             );
            })   
           : 
           <div>Lista vazia</div>}

          <div className={style.btn}>
            <button onClick={activeComponetForms}>Cadastrar Usuário</button>
          </div>
        </div>
      </div>
      <Formulario formik={formik} />
    </>

  )
}

export default List

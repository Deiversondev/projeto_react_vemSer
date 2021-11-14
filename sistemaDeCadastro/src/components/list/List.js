import Card from "../card/Card"
import style from "../list/List.module.css"
import Formulario from '../fomulario/Formulario';
import { useState } from "react";
import { useFormik } from 'formik';

const List = () => {

  const [activeForm, setActiveForm] = useState(false);
  const [activeList, setActiveList] = useState(true);

  const active = ()=> {
    if(activeList === true){
      setActiveForm(true);
      setActiveList(false);
    }else {
      setActiveForm(false);
      setActiveList(true);
    }
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
        id:values.id,
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
    {
      activeList ?
      <>
      <div className={style.list}>
        <div className={style.header}>
          <strong>Lista de Usuários</strong>
        </div>
        <div className={style.body}>

          {userList.length ?
           userList.map(user=>{
             return(
              <Card list={userList} setList={setUserList} user={user} />
             );
            })   
           : 
           <div className={style.listEmpty}><strong>Lista vazia</strong></div>}
        </div>
      </div>
          <div className={style.btn}>
            <button onClick={active}>Cadastrar Novo Usuário</button>
          </div>
      </>
      
      : <></>
    }
      <Formulario formik={formik} active={active} activeForm={activeForm}/> 
    </>

  )
}

export default List

import Card from "../card/Card";
import style from "../list/List.module.css";
import Formulario from '../fomulario/Formulario';
import { useState } from "react";
import { useFormik } from 'formik';

const List = () => {

  const [activeForm, setActiveForm] = useState(false);
  const [activeList, setActiveList] = useState(true);
  const [userID, setUserID] = useState(0);
  const [ButtonOne, setButtonOne] = useState("Cadastrar");
  const [ButtonTwo, setButtonTwo] = useState("Voltar");
  const [ButtonThree, setButtonThree] = useState("Cadastrar");

  const active = ()=> {
    if(activeList === true){
      setActiveForm(true);
      setActiveList(false);
    }else {
      setActiveForm(false);
      setActiveList(true);
    }
  };

  const [userId, setId] = useState(1);
  const [userList, setUserList] = useState([]);

  const validate = values => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Nome Obrigatório';
    } else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$/.test(values.firstName)) {
      errors.firstName = 'Números ou espaços não são permitidos';
    }else if(values.firstName.length > 32){
      errors.firstName = 'Permitido apenas 32 caracteres';
    };

    if (!values.lastName) {
      errors.lastName = 'Sobrenome Obrigatório';
    } else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(values.lastName)) {
      errors.lastName = 'Números não são permitidos';
    }else if(values.firstName.length > 32){
      errors.firstName = 'Permitido apenas 32 caracteres';
    };

    if (!values.email) {
      errors.email = 'E-mail Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email Invalido';
    };

    if (!values.address) {
      errors.address = 'Endereço Obrigatório';
    };

    if(!values.cellPhoneNumber){
      errors.cellPhoneNumber = 'Número Obrigatório';
    }else if(/_/.test(values.cellPhoneNumber)){
      errors.cellPhoneNumber = 'Digite todos os números';
    };

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      cellPhoneNumber: ''
    },
    validate,
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
    }
  });

  

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
              <Card setButtonOne={setButtonOne} setButtonTwo={setButtonTwo} setButtonThree={setButtonThree} ChangeId={userID => setUserID(userID)} list={userList} setList={setUserList} user={user} formik={formik} active={active}/>
             );
            })   
           : 
           <div className={style.listEmpty}><strong>Lista vazia</strong></div>}
        </div>
      </div>
          <div className={style.btn}>
            <button onClick={() => {active();setUserID(0)}}>Cadastrar Novo Usuário</button>
          </div>
      </> 
      : <></>
    }
      <Formulario ButtonOne={ButtonOne} ButtonTwo={ButtonTwo} ButtonThree={ButtonThree} setButtonOne={setButtonOne} setButtonTwo={setButtonTwo} setButtonThree={setButtonThree} setUserID={setUserID}  resetForm={formik.resetForm} setList={setUserList} list={userList} UserID={userID} formik={formik} active={active} activeForm={activeForm}/> 
    </>
  );
};

export default List;

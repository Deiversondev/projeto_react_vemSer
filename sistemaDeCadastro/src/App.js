import './App.css';
import List from './components/list/List';
import Formulario from './components/fomulario/Formulario';
import Card from './components/card/Card';
import {useFormik} from 'formik';
import {useState} from 'react'

function App() {

const [userId,setId] = useState(1);
const [userList, setUserList] = useState([]);

  const formik = useFormik({
    initialValues:{
        id:0,
        firstName:'',
        lastName: '',
        email:'',
        address:'',
        cellPhoneNumber:''
    },
    onSubmit: values =>{
        values.id = userId;
        setId(userId+1);
        userList.push({
          firstName:values.firstName,
          lastName:values.lastName,
          email:values.email,
          address:values.address,
          cellPhoneNumber:values.cellPhoneNumber
        })
        formik.resetForm();
        console.log(values);
        console.log(userList)
        
    }
})


  return (
    <div className="container">
      <Formulario formik={formik} />
      <List List={userList}  formik={formik}/>
      <Card  formik={formik}/>
    </div>
  )}

export default App;
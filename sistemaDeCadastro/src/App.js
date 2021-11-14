import './App.css';
import List from './components/list/List';
import Formulario from './components/fomulario/Formulario';
// import Card from './components/card/Card';
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
          id:values.id,
          firstName:values.firstName,
          lastName:values.lastName,
          email:values.email,
          address:values.address,
          cellPhoneNumber:values.cellPhoneNumber
        })
        formik.resetForm();
        console.log(values);
      
        
    }
})



  return (
    <div className="container">
      <Formulario values={formik.values} List={userList} formik={formik} />
      <List values={formik.values} List={userList} setUserList={setUserList}  formik={formik}/>
    </div>
  )}

export default App;
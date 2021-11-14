import styles from './Formulario.module.css'


function Formulario({List,formik}) {

    // function editUser(id){
    //     const userFound = List.find(user => user.id === id)
    //     formik.setValues(userFound)
    //     let userEdit = List.find(u => u.id === values.id)
    //     console.log(userEditado)
    //     // console.log(values)

    //     if (userEdit !== -1 ){
    //       userEdit.firstName = values.firstName
    //       userEdit.lastName = values.lastName
    //       userEdit.address = values.address
    //       userEdit.email = values.email
    //       userEdit.cellPhoneNumber = values.cellPhoneNumber
          
    //       setListUsuarios([...List])
    //   }
    // }

    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.title}>Cadastrar</div>
          <div className={styles.form}>

          <div className={styles.input}>
                <h4 htmlFor="firstName">Nome</h4>
                <input type="text" name="firstName" id="firstName" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.firstName}/>   
           </div>

            
            <div className={styles.input}>
                <h4 htmlFor="lastName">Sobrenome</h4>
                <input type="text" name="lastName" id="lastName" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.lastName}/>
            </div>
           
           <div className={styles.input}>
                <h4 htmlFor="email">Email</h4>
                <input type="text" name="email" id="email" placeholder="Digite seu e-mail" onChange={formik.handleChange} value={formik.values.email}/>
           </div>
            
            <div className={styles.input}>
                <h4 htmlFor="address">Endereço</h4>
                <input type="text" name="address" id="address"  placeholder="Digite seu endereço" onChange={formik.handleChange} value={formik.values.address} />
            </div>
            
            <div className={styles.input}>
                <h4 htmlFor="telefone">Telefone</h4>
               <input type="text" name="cellPhoneNumber" id="cellPhoneNumber" placeholder="Digite seu telefone" onChange={formik.handleChange} value={formik.values.cellPhoneNumber}/>
            </div>
            
            <div className={styles.btn}>
                <button type="submit">Cadastrar</button>
            </div>
            
          </div>

          
        </form>





           
        </div>
    )
}

export default Formulario



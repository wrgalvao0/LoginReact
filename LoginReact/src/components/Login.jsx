import React, { useState } from 'react'
import './Login.css'
import Button from './Button'
import styles from './Login.module.css'

const Login = () => {
    let [email, setEmail] = useState('')
    let [senha, setSenha] = useState('')
    
    function enviar(event){
        event.preventDefault()
        alert(`Dados enviados: Email: ${email} senha: ${senha}`)
        setEmail('')
        setSenha('')
    }

  return (
    <div id='container-geral'>
        <div id='container-formulario'>
            <h1>Efetue o login</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input className={styles.inputs} type="text" id='email' value={email || ''} onChange={(e) => {setEmail(e.target.value)}} />
                <label htmlFor="senha-usuario">Senha:</label>
                <input className={styles.inputs} type="text" id='senha-usuario' value={senha || ''} onChange={(e) => {setSenha(e.target.value)}}/>
                <div id='container-botao'>
                    <Button id={'botao-enviar'} text={'Entrar'} acao={enviar}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
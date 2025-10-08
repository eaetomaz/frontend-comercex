import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css';

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (usuario === '1' && senha === '1') {
      navigate('/home')
    } else {
      setErro('Usuário ou senha incorretos!')
    }
  }

  return (
    <div className='login-container'>
      <div className='login-left'>
        <img src="../public/imageLogin.png"alt= "Ilustração de login" className="login-image"/>
        <p className='login-subtitle'>
          Acumule pontos e desconto a cada produto adicionado na sacola
        </p>
      </div>

      <div className='login-right'>
        <form onSubmit={handleLogin} className='login-form'>
          <h2>Acessar conta</h2>

          {erro && <p className='login-error'>{erro}</p>}

          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>

          <p className="login-footer">
            Ainda não tem uma conta? <a href="#">Criar</a>
          </p>

        </form>
      </div>
    </div>
  )
}


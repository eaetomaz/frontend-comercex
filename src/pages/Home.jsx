import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  const navigate = useNavigate()

  return(
    <div className='home-container'>
      <div className='home-header'>
        <h2>Bem-vindo ao Mini ERP</h2>
        <p>Escolha uma opção para continuar</p>
      </div>

      <div className='home-cards'>
        <div className='card' onClick={() => navigate('/pdv')}>
          <img src='../public/iconPdv.png' alt='PDV' />
          <h3>PDV</h3>
          <p>Gerencie suas vendas de forma rápida e intuitiva.</p>
        </div>

        <div className='card' onClick={() => navigate('/estoque')}>
          <img src='../public/iconEstoque.png' alt='Estoque' />
          <h3>Estoque</h3>
          <p>Controle seus produtos e entradas de forma simples.</p>
        </div>

        <div className='card' onClick={() => navigate('/dashboard')}>
          <img src='../public/iconDashboard.png' alt='Dashboard' />
          <h3>Dashboard</h3>
          <p>Acompanhe métricas e relatórios em tempo real.</p>
        </div>        
      </div>

      <div className='footer'>
          <button onClick={() => navigate('/')}>Sair</button>
      </div>

    </div>
  )
}

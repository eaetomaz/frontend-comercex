import { useNavigate } from "react-router-dom"

export default function PDV() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Ponto de venda (PDV)</h1>
            <button onClick={() => navigate('/home')}>Voltar</button>
        </div>
    )
}
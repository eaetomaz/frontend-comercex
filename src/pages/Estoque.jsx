import { useNavigate } from "react-router-dom";

export default function Estoque() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Estoque</h1>
            <button onClick={() => navigate('/home')}>Voltar</button>
        </div>
    )
}
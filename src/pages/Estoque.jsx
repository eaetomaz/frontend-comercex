import { useNavigate } from "react-router-dom";
import '../styles/Estoque.css';
import { FaFilter, FaSearch, FaArrowLeft, FaSort, FaEdit, FaTrash } from 'react-icons/fa';

export default function Estoque() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="div-header">
                <img src="/iconEstoque.png" alt="Estoque" />
                <h1>Estoque</h1>
                <button onClick={() => navigate('/home')}><FaArrowLeft/>  Voltar</button>
            </div>            
            <div className="div-search">
                <div className="div-one-search">
                    <input placeholder="Oquê você está buscando?"/>                
                    <button><FaSearch/></button>
                </div>

            <div className="div-buttons">
                <button><FaFilter/> Filtro</button>
                <button><FaSort/> Ordenar</button>
            </div>
            </div>                
                
            <div className="div-products">                  
                <table className="table-products">
                    <thead>
                        <th>#</th>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Quant.</th>
                        <th>Preço de custo</th>
                        <th>Perc. lucro</th>
                        <th>Preço de venda</th>
                        <th>Quant. vendida</th>  
                        <th></th>
                        <th></th>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img className="image-product" src="/imageProduct.jfif" alt="image-product" /></td>
                            <td>000001</td>
                            <td>Coca-cola 2l</td>
                            <td>24,00</td>
                            <td>5,00</td>
                            <td>10%</td>
                            <td>10,00</td>
                            <td>100,00</td>
                            <td><FaEdit/></td>
                            <td><FaTrash/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
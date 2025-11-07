import { useNavigate } from "react-router-dom";
import '../styles/Estoque.css';
import { FaFilter, FaSearch, FaArrowLeft, FaSort, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { apiFetch } from "../services/api";
import { useEffect, useState } from "react";

export default function Estoque() {
    const navigate = useNavigate();
    const [ estoque, setEstoque] = useState([]);
    const [showModalTrash, setShowModalTrash] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [showModalEdit, setShowModalEdit] = useState(false);
    
    useEffect(() => {
    apiFetch("/estoque")
      .then(data => {
        setEstoque(data);
      })
      .catch(err => console.error(err));      
    }, []);

    function deleteEstoque(id) {
        setDeleteId(id);
        setShowModalTrash(true);
    }

    function confirmDelete() {
        apiFetch(`/estoque/${deleteId}`, {
            method: "DELETE",
        })
        .then(() => {        
            setEstoque((prev) => prev.filter((item) => item.id !== deleteId));
            setShowModalTrash(false);
            setDeleteId(null);
        })
        .catch((err) => console.log("Erro ao excluir o produto", err.error));
    }

    function cancelDelete() {
        setShowModalTrash(false);
        setDeleteId(null);        
    }

    function editarRegistro() {
        setShowModalEdit(true);
    }

    function renderEstoque(estoque) {
        return estoque
            .map((item, i) => (
                <tr key={i}>
                    <td>Imagem</td>
                    <td>{item.id}</td>
                    <td>{item.produto}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.precocusto}</td>
                    <td>{item.perclucro}</td>
                    <td>{item.precovenda}</td>
                    <td>{item.quatidadevendida}</td>
                    <td><button onClick={() => editarRegistro(item.id)}><FaEdit/></button></td>
                    <td><button onClick={() => deleteEstoque(item.id)}><FaTrash/></button></td>
                </tr>
            )
        );
    }    

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
                <button><FaPlus/> Adicionar produto</button>
                <button><FaFilter/> Filtro</button>
                <button><FaSort/> Ordenar</button>
            </div>
            </div>                
                
            <div className="div-products">                  
                <table className="table-products">
                    <thead>
                        <tr>
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
                        </tr>
                    </thead>

                    <tbody>
                        {renderEstoque(estoque)}
                    </tbody>
                </table>
            </div>
        
            {showModalTrash && (
                <div className="modal-overlay">
                <div className="modal">
                    
                    <h7>Atenção</h7>

                    <p>Deseja realmente excluir este produto? Operação irreversível.</p>

                    <div className="modal-buttons">
                        <button className="btn-confirm" onClick={confirmDelete}>Sim</button>
                        <button className="btn-cancel" onClick={cancelDelete}>Não</button>
                    </div>
                    
                </div>
                </div>
            )}

            {showModalEdit && (
                <div className="modal-overlay">
                    <div className="modal-cadastro">

                        <div className="header">
                            <p>COCA-COLA 2L</p>
                        </div>

                        <div className="data">

                            <input type="text" placeholder="Descrição do produto" />
                            <input type="text" placeholder="Quantidade disponível em estoque" />
                            <input type="text" placeholder="Quantidade disponível em estoque" />

                            <div className="product-values">

                                <input type="text" placeholder="Preço de custo" />
                                <input type="text" placeholder="Percentual de lucro" />
                                <input type="text" placeholder="Preço de venda" />

                            </div>
                            
                            <input type="text" placeholder="Quantidade vendida" />

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
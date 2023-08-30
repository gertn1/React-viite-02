import { useEffect, useState } from 'react';
import ListaProdutos from "./ListaProdutos";

const API_URL = 'https://products-api-i6m5.onrender.com/products'

function App() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setListaProdutos(data);
      }); 
  },[]);              
  
  return (
    <div className="min-h-screen bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-yellow-600 via-purple-200 to-teal-200">
      <h2>Itens no carrinho {itensCarrinho}</h2>
      {listaProdutos &&
      <ListaProdutos 
      listaProdutos={listaProdutos} 
      onClick={() => setItensCarrinho(itensCarrinho + 1)}/>}
    </div>
  );
}

export default App


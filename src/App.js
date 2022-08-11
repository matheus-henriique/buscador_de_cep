
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import "./styles.css"

import API from "./services/API"

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    // 05868670/json/

    if(input === '') {
      alert('Preencha o campo abaixo!')
      return // se for true a aplicação para
    }

    try{
      const response = await API.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    } catch{
      alert('ERRO')
      setInput('')
    }

  }

  return (
    <>
      <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="containerInput">
          <input 
            type="text" 
            placeholder="Digite seu cep..." 
            value={input}
            onChange={(e) => setInput(e.target.value) }
          />
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch fontSize={25} color="#fff"/>
        </button>
        </div>


        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>
            <p><span>Rua:</span> {cep.logradouro}</p>
            <p><span>Complemento:</span>  {cep.complemento}</p>
            <p><span>Bairro:</span> {cep.bairro}</p>
            <p><span>Localidade:</span> {cep.localidade} - {cep.uf}</p>
        </main>
        )}
      </div>

      <footer>
       <p> Desenlvido por <a href="https://www.instagram.com/" target='_blanck'>Matheus Henrique</a></p>
      </footer>
    </>
  );
}

export default App;

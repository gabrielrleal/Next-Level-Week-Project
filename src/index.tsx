//primeiro arquivo JS carregado carregado pela aplicação
//extensão .tsx ou .jsx -> JavaScript ou TypeScript xml , permite HTML dentro do JS
import React from 'react'; // importação necessária para todo arquivo que for utilizar da sintaxe de HTML dentro do arquivo
import ReactDOM from 'react-dom'; //integração do REACT com a DOM 
import App from './App';

ReactDOM.render( // metodo render recebe tags html ou componentes(funções que retornam jsx html)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


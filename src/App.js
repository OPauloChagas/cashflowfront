import React from 'react';
import LancamentoForm from './components/LancamentoForm';
import ConsultaRelatorio from './components/ConsultaRelatorio';
import './styles.css';  // Importando o arquivo CSS

function App() {
    return (
        <div className="container">
            <h1>Gerenciamento de Fluxo de Caixa</h1>
            <LancamentoForm />
            <ConsultaRelatorio />
        </div>
    );
}

export default App;

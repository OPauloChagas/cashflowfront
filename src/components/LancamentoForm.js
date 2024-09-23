import React, { useState } from 'react';
import axios from 'axios';

const LancamentoForm = () => {
    const [lancamento, setLancamento] = useState({
        tipo: '',
        valor: 0,
        descricao: '',
        clienteId: '',
        data: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLancamento((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            console.log(lancamento);
            const response = await axios.post('https://localhost:7285/api/lancamento/create', lancamento);
            alert('Lançamento registrado com sucesso!');
        } catch (error) {
            alert('Erro ao registrar lançamento');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Novo Lançamento</h2>
            <div>
                <label>Tipo: </label>
                <select name="tipo" value={lancamento.tipo} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="credito">Crédito</option>
                    <option value="debito">Débito</option>
                </select>
            </div>
            <div>
                <label>Valor: </label>
                <input type="number" name="valor" value={lancamento.valor} onChange={handleChange} />
            </div>
            <div>
                <label>Descrição: </label>
                <input type="text" name="descricao" value={lancamento.descricao} onChange={handleChange} />
            </div>
            <div>
                <label>Cliente ID: </label>
                <input type="text" name="clienteId" value={lancamento.clienteId} onChange={handleChange} />
            </div>
            <div>
                <label>Data: </label>
                <input type="date" name="data" value={lancamento.data} onChange={handleChange} />
            </div>
            <button type="submit">Registrar Lançamento</button>
        </form>
    );
};

export default LancamentoForm;

import { useState } from 'react';

function Cadastro (){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confimarSenha, setConfirmarSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    function handleSubmit(e) {
    e.preventDefault(); // impede o recarregamento da página

    // Por enquanto, só exibe no console
        alert("pessoa criada")
  }
    return(
        <>
            <div class="card">
                <h1>Criar conta</h1>
               
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        
                    </div>

                    <div class="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="xxx.xxx.xxx-xx"
                        />
                    </div>

                    <div class="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div class="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div class="form-group">
                        <label htmlFor="confirmar">Confirmar senha</label>
                        <input
                            type="password"
                            id="confirmar"
                            value={confimarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" id="btnCadastrar">Cadastrar</button>

                    <div id="mensagem"></div>
                </form>
                <footer>

                </footer>

            </div>        
        </>
    );
}

export default Cadastro;
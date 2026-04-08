import { useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {
  // 1. Criamos dois estados: um para email, outro para senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // 2. Função chamada quando o formulário é enviado
  function handleSubmit(e) {
    e.preventDefault(); // impede o recarregamento da página

    // Por enquanto, só exibe no console
    console.log('Email:', email);
    console.log('Senha:', senha);
    alert(`Email: ${email}\nSenha: ${senha}`);
  }

  return (
    <div className="card">
      <h1 className="campo">login</h1>

      {/* 3. onSubmit chama nossa função */}
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">email</label>
          {/* 4. value vincula o input ao estado, onChange atualiza */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha">senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="sua senha"
          />
        </div>

        <button type="submit">entrar</button>
      </form>

      <footer>
         <p>não possui uma conta? <Link to="/cadastro">cria uma conta</Link></p>
      </footer>
    </div>
  );
}

export default Login;
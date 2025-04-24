import Button from 'react-bootstrap/Button';
import Logo from './Logo';
const Login = () => {
    return (
        <div className="max-w-2xl min-w-[40rem] mx-auto p-6 bg-white rounded-lg shadow-md my-20">
            <Logo/>
            <form className="flex flex-col gap-3">
            <div className="flex flex-col">
                <label className="text-sm text-left"> Email :</label>
                <input type="text" placeholder="Digite seu endereço de email." className="rounded-lg py-2 px-4 text-sm border border-gray-30 " required></input>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-left"> Senha:</label>
                <input type="password" placeholder="Digite sua senha." className="rounded-lg py-2 px-4 text-sm border border-gray-30" required></input >
            </div>
            <Button type='submit' variant='primary' href='/'>Login</Button>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            </div>
            <p>Não possui conta ?{' '}
                <a href="/pages/cadastro" className="text-blue-600 hover:underline">
                    Cadastrar
                </a>
            </p>
    </div>
    );
};
export default Login;
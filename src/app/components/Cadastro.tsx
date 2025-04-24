import Button from 'react-bootstrap/Button';
import Logo from './Logo';
const Cadastrar = () => {
    return (
        <div className="max-w-2xl min-w-[40rem] mx-auto p-6 bg-white rounded-lg shadow-md my-20">
            <Logo/>
            <form className="flex flex-col gap-3">
            <div className="flex flex-col">
                <label className="text-sm text-left"> Usuário :</label>
                <input type="text" placeholder="Seu nome completo." className="rounded-lg py-2 px-4 text-sm border border-gray-30" required></input>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-left"> Email :</label>
                <input type="text" placeholder="Seu endereço de email." className="rounded-lg py-2 px-4 text-sm border border-gray-30 " required></input>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-left"> Senha:</label>
                <input type="password" placeholder="Digite sua senha." className="rounded-lg py-2 px-4 text-sm border border-gray-30" required></input >
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-left"> Repita sua Senha:</label>
                <input type="password" placeholder="Digite Sua senha novamente." className="rounded-lg py-2 px-4 text-sm border border-gray-30" required></input >
            </div>
            <Button type='submit' variant='primary' href='/pages/login'>Cadastrar</Button>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">
            Caso tenha problemas no cadastro, nos envie um email. {' '}
        <a href="mailto:contato@plataforma.com" className="text-blue-600 hover:underline">
            contato@plataforma.com
        </a>
        </p>
    </div>
    </div>
    );
};
export default Cadastrar;
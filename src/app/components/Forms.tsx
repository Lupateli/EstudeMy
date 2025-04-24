import Button from 'react-bootstrap/Button';
const Form = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-20">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Fale Conosco</h1>
            <p className="text-gray-600 mb-6">Entre em contato conosco preenchendo o formulário abaixo. Estamos aqui para ajudar!</p>
            <form className="flex flex-col gap-3">
            <div className="flex flex-col">
                <label className="text-sm text-left"> Nome :</label>
                <input type="text" placeholder="Seu nome completo." className="rounded-lg py-2 px-4 text-sm border border-gray-30" required></input>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-left"> Email :</label>
                <input type="text" placeholder="Seu endereço de email." className="rounded-lg py-2 px-4 text-sm border border-gray-30 " required></input>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-left"> Assunto :</label>
                <input type="text" placeholder="Digite o Assunto." className="rounded-lg py-2 px-4 text-sm border border-gray-30" required></input >
            </div>
            <div>
                <label className="text-sm text-left" > Mensagem </label>
                <br></br>
                <textarea id="message" name="message" placeholder="Escreva sua mensagem..." required className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
            </div>
            <Button type='submit' variant='primary' >Enviar Mensagem</Button>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">
            Ou entre em contato diretamente pelo e-mail: {' '}
        <a href="mailto:contato@plataforma.com" className="text-blue-600 hover:underline">
            contato@plataforma.com
        </a>
        </p>
      </div>
    </div>
    );
};
export default Form;
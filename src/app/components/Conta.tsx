import { Button } from "react-bootstrap";

const Conta = () => {
    return (
    <div className="max-w-2xl min-w-[50rem] mx-auto p-6 bg-white rounded-lg shadow-md my-20">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Minha Conta</h1>
            <form className="flex flex-col gap-3">
            <div className="flex flex-col"></div>
        <div className="container ">
            <main>
                <section className="account-info">
                <h2>Informações Pessoais</h2>
                <div className="info-row">
                    <span className="label">Nome:  </span>
                    <span className="value">João Silva</span>
                </div>
                <div className="info-row">
                    <span className="label">E-mail:  </span>
                    <span className="value">joao.silva@example.com</span>
                </div>
                <div className="info-row">
                    <span className="label">Telefone:  </span>
                    <span className="value">(11) 98765-4321</span>
                    </div>
                    <br/>
                    <Button type='submit' variant="secondary" href=''>Editar Informaçoes</Button>
                    <br />
                    <br/>
                <Button type='submit' variant="primary" href=''>Criar Trilha</Button>
                </section>
            </main>
        </div>
            </form>
        </div>
        );
};
export default Conta;
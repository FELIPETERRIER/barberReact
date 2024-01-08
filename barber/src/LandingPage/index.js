import './style.css';
import { useState } from "react";



export default function LandingPage() {
    

    const [estiloEscuro, setEstiloEscuro] = useState(true);
    const alteraEstilo = () => {
        setEstiloEscuro(!estiloEscuro);}

        return (
            <div className={estiloEscuro?'modo-escuro':'modo-claro'}>
            <div>
                <header>
                    <div className="limitar-secao">
                        <div className='topo'>
                            <div className="logo">
                                <img src="/assets/barbearia-logo.png " alt="logo da barbearia" />
                            </div>
                            <button onClick={alteraEstilo} className={estiloEscuro?"modo-escuro":"modo-claro"}>
                                <img className='style-button' src={estiloEscuro?'assets/sun.png':'assets/moon.png'} alt="icone" />
                                {estiloEscuro ? `Light` : `Dark`}
                            </button>                           

                        </div>
                    </div>
                </header>
                <section>
                    <div className="secao-banner"></div>
                </section>
                <section>
                    <div className="secao-um">
                        <h1>Bem-vindo a Barber Shop</h1>
                        <p className='first-p'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                        <p className='second-p'>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                        <p className='other-font'>S. Kelly</p>
                    </div>
                </section>

            </div>
            </div>


        );
    }



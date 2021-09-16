import './Main.css';
import avatar from '../../assets/logo.png'
import Chart from '../charts/Chart';

const Main = () =>{
    return(
    <main>
        <div className="main__container">
            
            <div className="main__title">
                <img src={avatar} alt="Hello"/>
                <div className="main__greeting">
                    <h1>Olá Rudnei</h1>
                    <p>Seja bem vindo a W2e Tecnologia</p>
                </div>
            </div>

            <div className="main__cards">
                
                <div className="card">
                    <i className="fa fa-user fa-2x text-lightblue"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Número de Usuários</p>
                        <span className="font-bold text-title">23</span>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-building fa-2x text-red"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Número de Entidades</p>
                        <span className="font-bold text-title">2</span>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-laptop fa-2x text-yellow"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Acessos</p>
                        <span className="font-bold text-title">535</span>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-users fa-2x text-green"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Novas Solicitações</p>
                        <span className="font-bold text-title">246</span>
                    </div>
                </div>

            </div>

            <div className="charts">
                
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Dialy Report</h1>
                            <p>Iguatu, Ceará, BR</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <Chart />
                </div>

                <div className="charts__right">
                   
                    <div className="charts__right__title">
                        <div>
                            <h1>Dialy Report</h1>
                            <p>Iguatu, Ceará, BR</p>
                        </div>
                        <i className="fa fa-area-chart"></i>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Entidades</h1>
                            <p>2</p>
                        </div>
                        <div className="card2">
                            <h1>Usuários</h1>
                            <p>23</p>
                        </div>
                        <div className="card3">
                            <h1>Acessos</h1>
                            <p>535</p>
                        </div>
                        <div className="card4">
                            <h1>Solocitações</h1>
                            <p>246</p>
                        </div>
                    </div>


                </div>
       
            </div>

        </div> 
    </main>
    );
}

export default Main
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

            </div>

            <div className="charts">
                
                <div className="charts__left">
                    <div className="charts__left_title">
                        <div>
                            <h1>Dialy Report</h1>
                            <p>Iguatu, Ceará, BR</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <Chart />
                </div>


                
            </div>

        </div> 
    </main>
    );
}

export default Main
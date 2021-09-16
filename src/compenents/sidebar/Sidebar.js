import './Sidebar.css';
import logo from '../../assets/logo.png';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
        
        <div className="sidebar__title">
            <div className="sidebar__img">
                <img src={logo} alt="logo"></img>
                <h1>W2e Tecnologia</h1>
            </div>
            <i onClick={() => closeSidebar()} className="fa fa-times" id="sidebarIcon" aria-hidden="true"></i>
        </div>
        
        <div className="sidebar__menu">           
            
            <div className="sidebar__link active_menu_link">
                <i className="fa fa-minus-square"></i>
                <a href="#">Home</a>     
            </div>
            
            <h2>ADMIN</h2>
            
            <div className="sidebar__link">
                <i className="fa fa-home"></i>
                <a href="#">Entidade</a>
            </div>

            <div className="sidebar__link">
                <i className="fa fa-user-circle"></i>
                <a href="#">Usuários</a>
            </div>
            
            <div className="sidebar__link">
                    <i className="fa fa-product-hunt"></i>
                    <a href="#">Produtos</a>
            </div>


            <div className="sidebar__logout">
                <i className="fa fa-power-off"></i>
                <a href="#">Log Out</a>
            </div>

        </div>

    </div>
    )
}

export default Sidebar;
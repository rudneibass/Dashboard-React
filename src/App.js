import { useState } from 'react';
import './App.css';
import Sidebar from './compenents/sidebar/Sidebar';
import Navbar from './compenents/navbar/Navbar';
import Main from './compenents/main/Main';

const App = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () =>{
        setSidebarOpen(true);
    };
    const closeSidebar = () =>{
        setSidebarOpen(false); 
    }

    return ( 
    <div className = "container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    
        </div>   
    );
}

export default App;
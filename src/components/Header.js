import React from 'react'
import logo from '../logo.png';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="App-header">
            <div className='logo-buttons'>
            <img onClick={() => navigate('/')} src={logo} className="App-logo" alt="logo" />
                    <div className='headerButtons'>
                        <Button onClick={() => navigate('/potions')} > Potions </Button>
                        <Button onClick={() => navigate('/armes')} > Armes </Button>
                        <Button onClick={() => navigate('/armures')} > Armures </Button>
                        <Button onClick={() => navigate('/montures')} > Montures </Button>
                    </div>
             </div>
             <h1 className="App-title">Adventurer's Epic Shop</h1>
        </header>
    )
}

export default Header
import React from 'react'
import logo from '../logo.png';
import { Button } from 'antd';


const Header = () => {
    return (
        <header className="App-header">
            <div className='logo-buttons'>
                <div className='header-empty-space'> </div>
            <img src={logo} className="App-logo" alt="logo" />
                <div className='header-empty-space2'> </div>
                    <div className='headerButtons'>
                        <Button> Potions</Button>
                        <Button> Armes</Button>
                        <Button> Armures</Button>
                        <Button> Montures</Button>
                    </div>
             </div>
             <h1 className="App-title">Adventurer's Epic Shop</h1>
        </header>
    )
}

export default Header
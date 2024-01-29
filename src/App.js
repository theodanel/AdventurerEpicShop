import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import './stylesheets/App.scss';
import itemsList from "./itemsList";
import { Col, Card, Row } from 'antd';
import Filters from './components/Filters';
import imgPotion from "./img/potion.png";
import imgWeapon from "./img/weapon.png";
import imgArmor from "./img/armor.png";
import imgMount from "./img/mount.png";

const App = () => {
    const [priceFilter, setPriceFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [itemsState, setItemsState] = useState(itemsList);

    const handlePriceFilterChange = (event) => {
        setPriceFilter(Number(event.target.value));
    };
      
    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const filteredItems = itemsState.filter((item) => {
        if (priceFilter !== 'all' && categoryFilter !== 'all') {
            if (priceFilter === "moreThan1500") {
                return item.price > 1500 && item.category === categoryFilter && item.bestsale;
            } else {
                return item.price < priceFilter && item.category === categoryFilter && item.bestsale;
            }
        } else if (priceFilter !== 'all') {
            if (priceFilter === "moreThan1500") {
                return item.price > 1500 && item.bestsale;
            } else {
                return item.price < priceFilter && item.bestsale;
            }
        } else if (categoryFilter !== 'all') {
            return item.category === categoryFilter && item.bestsale;
        }
        
        return item.bestsale;
    });

    const items = filteredItems.map(item => {
        let imgItem = null;
        if (item.category === "potions") {
            imgItem = <img className="itemsImg" src={imgPotion} alt="Potion" />;
        } else if (item.category === "armes") {
            imgItem = <img className="itemsImg" src={imgWeapon} alt="Arme" />;
        } else if (item.category === "armures") {
            imgItem = <img className="itemsImg" src={imgArmor} alt="Armure" />;
        } else if (item.category === "montures") {
            imgItem = <img className="itemsImg" src={imgMount} alt="Monture" />;
        } else {
            imgItem = <p>Aucune image</p>;
        }



        let effectsItem = null; 
        if (item.effects) {
          effectsItem = <h4>Effets: {item.effects}</h4>; 
        } else {
            effectsItem = <h4>Aucun effet</h4>; 
        }
        return (
            <Fragment>
                <Col key={item.id} md={6}>
                    <Card className="items" title={item.name}>
                        <div>
                            <h4>Prix: {item.price}</h4>
                            <h4>Description: {item.description}</h4>
                            <h4>{effectsItem}</h4>
                            <div className='image-container'>
                            {imgItem}
                            </div>
                        </div>
                    </Card>
                </Col>
            </Fragment>
        );
    });

    return (
        <div className="App">
            <Header />
            <h2 className='availableItems'>LES TENDANCES CHEZ LES AVENTURIERS !</h2>
    <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/spring_days.mp4`} style={{ width: '100%', height: 'auto' }}></video>
            <div className="content">
                <div className="itemsList">
                <div className="video-container">
</div>
                    <Filters className="Filters" onPriceFilterChange={handlePriceFilterChange} onCategoryFilterChange={handleCategoryFilterChange} />
                    <Row gutter={16}>
                        {items}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default App;
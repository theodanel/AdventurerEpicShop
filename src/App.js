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
        setPriceFilter(event.target.value);
    };
      
    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const filteredItems = itemsList.filter((item) => {
        if (priceFilter !== 'all' && categoryFilter !== 'all') {
            if (priceFilter === "moreThan1500") {
                if (item.price > 100) {
                    return item.category.includes(categoryFilter)
                }
            } else if (item.price < priceFilter) {
                return item.category.includes(categoryFilter)
            }
        }
    });

    const items = itemsState.map(item => {
        let effectsItem = null;
        if (item.effects) {
            effectsItem = <h4>Effets: {item.effects}</h4>;
        } else {
            effectsItem = <h4>Aucun effet</h4>;
        }

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

        return (
            <Fragment>
                <Col key={item.id} md={6}>
                    <Card className="items" title={item.name}>
                        <div>
                            <h4>Prix: {item.price}</h4>
                            <h4>Description: {item.description}</h4>
                            <h4>{effectsItem}</h4>
                            {imgItem}
                        </div>
                    </Card>
                </Col>
            </Fragment>
        );
    });

    return (
        <div className="App">
            <Header />
            <h2>Articles disponibles pour les aventuriers :</h2>
            <Filters className="Filters" onPriceFilterChange={handlePriceFilterChange} onCategoryFilterChange={handleCategoryFilterChange} />

            <div className="itemsList">
                <Row gutter={16}>
                    {items}
                </Row>
            </div>
        </div>
    );
}

export default App;
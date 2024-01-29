import React, { useState, Fragment } from 'react';
import Header from './Header';
import '../stylesheets/App.scss';
import itemsList from "../itemsList";
import { Col, Card, Row } from 'antd';
import Filters from './Filters';
import imgMount from "../img/mount.png";

const Montures = () => {
    const [priceFilter, setPriceFilter] = useState('all');
    const [itemsState, setItemsState] = useState(itemsList);
    


    const handlePriceFilterChange = (event) => {
        setPriceFilter(Number(event.target.value));
        setItemsState(filteredItems)
    };


    const filteredItems = itemsState.filter((item) => {
        if (priceFilter !== 'all') {
            if (priceFilter === "moreThan1500") {
                return item.price > 1500 ;
            } else {
                return item.price < priceFilter ;
            }
        } else if (priceFilter !== 'all') {
            if (priceFilter === "moreThan1500") {
                return item.price > 1500 ;
            } else {
                return item.price < priceFilter ;
            }
        } 
        
        return true;
    }
    );

    const items = filteredItems.map(item => {
        let imgItem = null;
        if (item.category === "montures") {
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
            <div className="video-container">
                <div>
                    <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/spring_days.mp4`} />
                </div>
            </div>

            <div className="content">
                <div className="itemsList">
                

                    <Filters className="Filters" onPriceFilterChange={handlePriceFilterChange}  />
                    <Row gutter={20}>
                        {items}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Montures;
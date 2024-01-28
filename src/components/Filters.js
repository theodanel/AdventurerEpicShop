import React from 'react'


const Filters = ({ onEffectFilterChange ,onPriceFilterChange, onCategoryFilterChange, priceFilter }) => {
    return (
        <div className="container">
            <div className="filter-section">
                <div className="filter-label">Filtrer par prix :</div>
                <select
                    className="filter-select"
                    value={priceFilter}
                    onChange={onPriceFilterChange}
                >
                    <option value="all">Tous</option>
                    <option value="500">Moins de 500</option>
                    <option value="1000">Moins de 1000</option>
                    <option value="1500">Moins de 1500</option>
                    <option value="moreThan1500">Plus de 1500</option>
                </select>
                <div className="filter-label">Filtrer par catégorie :</div>
                <select
                    className="filter-select"
                    onChange={onCategoryFilterChange}
                >
                    <option value="all">Toutes</option>
                    <option value="armes">Armes</option>
                    <option value="armures">Armures</option>
                    <option value="potions">Potions</option>
                    <option value="montures">Montures</option>
                </select>

                <div className="filter-label">Filtrer par effets :</div>
                <select
                    className="filter-select"
               
                    onChange={onEffectFilterChange}
                >
                    <option value="all">Tous</option>
                    <option value="oui">Effets</option>
                    <option value="non">Sans effets</option>

                </select>
            </div>
        </div>
    );
};

export default Filters;
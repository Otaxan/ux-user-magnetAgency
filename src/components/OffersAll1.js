import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Select from "react-select"
import avatar from "../images/avatar.png"
import {Link} from "react-router-dom"



const OffersAll1=()=>{
    useEffect(() => {
        document.title = "Все офферы";
    }, []);


    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const countryOptions = [
        // { value: "", label: "Выберите страну" },
        { value: "Россия", label: "Россия" },
        { value: "Америка", label: "Америка" },
        { value: "Канада", label: "Канада" },
        { value: "Китай", label: "Китай" }
    ];

    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: '2.5rem',
            width: '395px',
            backgroundColor: 'black',
            minHeight: '2.5rem',
            fontSize: '16px',

            border: '1px solid rgba(255, 255, 255, 0.418)',
            borderRadius: '2rem',
            cursor: 'pointer',
            paddingRight: '2rem',
            paddingLeft: '2rem',
            display: 'flex',
            // backgroundColor: '#c2d1e8',
            boxShadow: state.isFocused ? 'none' : base.boxShadow,
            color: 'rgba(225, 225, 225, 0.418)',
            outline: 'none'
        }),
        valueContainer: (base) => ({
            ...base,
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
            
            height: '100%'
        }),
        input: (provided) => ({
            ...provided,
            margin: '0', // Убираем внешние отступы
            padding: '0',
            // color: 'rgba(225, 225, 225, 0.418)',
        }),
        indicatorsContainer: (base) => ({
            ...base,
            height: '2.5rem',
            minHeight: '2.5rem',
        }),
        dropdownIndicator: (base) => ({
            ...base,
            padding: '0',
            color: 'rgba(225, 225, 225, 0.418)',
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),

        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            marginTop: '1rem',
            backgroundColor: 'black',
        }),
        menuList: (base) => ({
            ...base,
            // padding: '10px',
            color: 'rgba(255, 255, 255, 0.418)',
            backgroundColor: 'black',
            width: '390px',
            fontSize: '163px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            maxHeight: '10rem'
        }),
        option: (base) => ({
            ...base,
            padding: '5px 10px', // Уменьшаем отступы для опций
            fontSize: '19px',
            backgroundColor: 'black',
            color: 'rgba(255, 255, 255, 0.418)'
        })
    };

    // const customFilterOption = () => null;



    const [activeTab, setActiveTab] = useState('alloffers');
    const [allOffers] = useState([
        { id: 1, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        // Добавьте другие офферы
    ]);
    const [myOffers] = useState([
        { id: 1, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        { id: 2, name: 'Название оффера', description: 'описание описание описание описание описание описание', country: 'Франция', action: '500', imageUrl: avatar },
        // Добавьте другие офферы
    ]);
    const renderOffers = () => {
        switch (activeTab) {
            case 'alloffers':
                return allOffers.map(offer => (
                    <div key={offer.id} className="offerslist">
                        <img src={offer.imageUrl} alt="" style={{ marginTop: '-1.1rem' }}/>
                        <div className="descriptionoffer">
                            <h4><Link to="/offer-detail/" className="linkoffer">{offer.name}</Link></h4>
                            <p className="pdesc">{offer.description}</p>
                            <div className="geo">
                                <p className="country">Гео</p>
                                <p className="country">Ставка</p>
                            </div>
                            <div className="geo1">
                                <p className="country1">{offer.country}</p>
                                <h4 className="h4geo">{offer.action}</h4>
                            </div>
                                
                        </div>
                    </div>
                ));
            case 'myoffers':
                return myOffers.map(offer => (
                    <div key={offer.id} className="offerslist" style={{ marginTop: '-3rem' }}>
                        <img src={offer.imageUrl} alt=""/>
                        <div className="descriptionoffer">
                            <h4><Link to="/offer-detail/" className="linkoffer">{offer.name}</Link></h4>
                            <p className="pdesc">{offer.description}</p>
                            <div className="geo">
                                <p className="country">Гео</p>
                                <p className="country">Ставка</p>
                            </div>
                            <div className="geo1 geo2">
                                <p className="country1">{offer.country}</p>
                                <h4 className="h4geo">{offer.action}</h4>
                            </div>
                                
                        </div>
                    </div>
                ));
            default:
                return null;
        }
    };

    return(
        <>
            <div className="container">
                <div className="offers">
                    <h1>ОФФЕРЫ</h1>
                        <div className="filteroffers">
                            <button
                                className={`tab ${activeTab === 'alloffers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('alloffers')}
                            >
                                все
                            </button>
                            <button
                                className={`tab ${activeTab === 'myoffers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('myoffers')}
                            >
                                мои ({myOffers.length})
                            </button>
                        </div>
                    <div className="stattop" style={{ padding: '1px 5px', cursor: 'pointer', width: '10rem' }}>
                        {activeTab === 'alloffers' && (
                            <Select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                options={countryOptions}
                                placeholder="Выберите страну"
                                className="select"
                                styles={customStyles}
                                isSearchable={false}
                            />
                        )}
                    </div>
                    <div className="listoffers">
                        {renderOffers()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffersAll1;
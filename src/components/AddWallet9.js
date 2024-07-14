import React, {useState} from "react";
// import wallet from "../images/wallet.png";
import {Link} from "react-router-dom";
import Select from "react-select";


const AddWallet9 =()=>{

    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: '3rem',
            minHeight: '3rem',
            fontSize: '1rem',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.418)',
            marginBottom: '1rem',
            cursor: 'pointer',
            padding: '9px 1rem',
            display: 'flex',
            backgroundColor: 'black',
            color: 'rgba(255, 255, 255, 0.418)',
            boxShadow: state.isFocused ? 'none' : base.boxShadow,
            outline: 'none',
            width: '100%'
        }),
        valueContainer: (base) => ({
            ...base,
            padding: '0 0px',
            display: 'flex',
            color: 'black',
            alignItems: 'center',
            // height: '100%'
        }),
        input: (base) => ({
            ...base,
            margin: '0', // Убираем внешние отступы
            padding: '0',
            
        }),
        indicatorsContainer: (base) => ({
            ...base,
            // height: '1rem',
            // minHeight: '1rem',
        }),
        indicatorSeparator: ()=>({
            display: 'none'
        }),
        dropdownIndicator: (base) => ({
            ...base,
            padding: '0',
            color: 'rgba(255, 255, 255, 0.418)',
            // display: 'none'
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            marginTop: '4px',
            backgroundColor: 'black',
            width: '100%'
        }),
        menuList: (base) => ({
            ...base,
            padding: '0',
            color: 'rgba(255, 255, 255, 0.418)',
            height: '10rem'
        }),
        option: (base) => ({
            ...base,
            padding: '1rem',
            // padding: '0px 5px', // Уменьшаем отступы для опций
            fontSize: '14px',
            borderRadius: '10px',
            backgroundColor: 'black'
        })
    };

    const handleNetworkChange = (selectedNetwork) => {
        setSelectedNetwork(selectedNetwork);
    };
    const networkOptions = [
        // { value: "", label: "Выберите страну" },
        { value: "Trc20", label: "Trc20" },
        { value: "Trc20", label: "Trc20" },
        
    ];
    const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);

    return(
        <>
            <div className="container">
                <div className="addwallet">
                    <h4>ДОБАВИТЬ КОШЕЛЁК</h4>
                    <div className="numberwallet">
                        <p>Адрес кошелька Usdt</p>
                        <input className="adresinput" type="text"/>
                    </div>
                    <div className="numberwallet">
                        <p>Выберите сеть</p>
                        <Select
                        value={selectedNetwork}
                        onChange={handleNetworkChange}
                        options={networkOptions}
                        // placeholder="Офферы"
                        className="select"
                       styles={customStyles}
                        />
                    </div>
                    <Link to="/withdrawal_money">
                    <button>ДОБАВИТЬ</button>

                    </Link>
                </div>
            </div>
        </>
    );
};


export default AddWallet9;
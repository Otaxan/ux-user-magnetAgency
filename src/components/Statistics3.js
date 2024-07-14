import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import Select from "react-select";
import { ReactComponent as SearchIcon } from "../images/search.svg"
import 'react-datepicker/dist/react-datepicker.css';
// import { addDays } from 'date-fns';


const Statistics3=()=>{
    useEffect(() => {
        document.title = "Статистика";
    }, []);


    const [startDate] = useState(new Date());
    // , setStartDate
    // const [endDate, setEndDate] = useState(addDays(new Date(), 6));



    const [selectedOffer, setSelectedOffer] = useState(null);
    const handleOfferChange = (selectedOffer) => {
        setSelectedOffer(selectedOffer);
    };
    const offerOptions = [

        { value: "Оффер", label: "Оффер" },
        { value: "Оффер1", label: "Оффер1" },

    ];


    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: '2.5rem',
            minHeight: '2.5rem',
            fontSize: '1.1rem',
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
            width: '10rem'
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
        }),
        menuList: (base) => ({
            ...base,
            padding: '0',
            color: 'rgba(255, 255, 255, 0.418)',
            height: '10rem',
            width: '10rem'
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



    return (
        <>
            <div className="container">
                <div className="statis">
                    <h2>СТАТИСТИКА</h2>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.3rem' }}>
                        <input type="search" placeholder="поиск..."/>
                        <SearchIcon style={{ position: 'absolute', marginLeft: '83%' }} />
                    </div>
                    <Select
                        value={selectedOffer}
                        onChange={handleOfferChange}
                        options={offerOptions}
                        placeholder="Офферы"
                        className="select"
                       styles={customStyles}
                    />
                        
                    <DatePicker
                        className="date"
                        // selected={startDate}                                onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        placeholderText="дд.мм.гггг"
                        // endDate={endDate}
                        dateFormat="dd.MM.yyyy"
                    />
                        
                            


                    <table className="tablestatisuser">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Date</th>
                                <th>Registration</th>
                                <th>Deposit</th>
                                <th>Hold</th>
                                <th>Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>09.05.2024</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
};


export default Statistics3;
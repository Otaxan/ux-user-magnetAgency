import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Switch } from '@mui/material';
import Modal from 'react-modal';
// import avatar from "../images/avatar.png";

const MyProfile4=()=>{

    useEffect(() => {
        document.title = "Мой профиль";
    }, []);


    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };



    const [telegramEnabled, setTelegramEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const handleTelegramChange = (event) => {
        setTelegramEnabled(event.target.checked);
    };
    const handleEmailChange = (event) => {
        setEmailEnabled(event.target.checked);
    };



    const [telegram, setTelegram] = useState('');
    const telegramChange = (event) => {
        setTelegram(event.target.value);
    }

    const [email, setEmail] = useState('');
    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const customStyles = {

        '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              color: 'white',
              '& + .MuiSwitch-track': {
                backgroundColor: 'blue', // Синий цвет для включенного состояния
                // color: 'white'
              },
              '& .MuiSwitch-thumb': {
                backgroundColor: 'white', // Синий цвет для шарика в выключенном состоянии
                width: 20, // Уменьшаем размер шарика
                height: 20, // Уменьшаем размер шарика
              },
            },
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: 'blue', // Синий цвет для шарика в выключенном состоянии
            width: 20, // Уменьшаем размер шарика
            height: 20, // Уменьшаем размер шарика
          },
          '& .MuiSwitch-track': {
              borderRadius: 25,
            backgroundColor: 'white', // Белый фон в выключенном состоянии
            opacity: 1,
        },
    }
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    return(
        <>
            <div className="container">
                <div className="myprofile">
                    <h2>МОЙ ПРОФИЛЬ</h2>
                    <div className="editfoto">
                        <div className="image-preview">
                            {selectedImage && (
                                <img src={selectedImage} alt="" />
                            )}
                        </div>
                        <div className="chose">
                            <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
                            <label htmlFor="file-upload" className="custom-file-upload">
                                выбрать фото
                            </label> <br/>
                            <button>Сохранить</button>
                        </div>
                    </div>
                    <form className="inputsdiv">
                        <div>
                            <p>Ваше имя</p>
                            <input type="text"/>
                        </div>
                        <div>
                            <p>Ваш электронный адрес</p>
                            <input type="email" value={email} onChange={emailChange}/>
                        </div>
                        <div>
                            <p>Ваш телеграм</p>
                            <input type="text" value={telegram} onChange={telegramChange}/>
                        </div>
                        <button type="submit">Установить</button>
                    </form>
                    <button className="passw" onClick={openModal}>Сменить пароль</button>
                    <div className="notification">
                        <h4 className="h4notif">Уведомления</h4>
                        <div className="flexcheck">
                            <div className="text">
                                <h4>В телеграм</h4>
                                <p>{telegram}</p>
                                
                            </div>
                            <Switch
                            checked={telegramEnabled}
                            onChange={handleTelegramChange}
                            // color="primary"
                            sx={customStyles}
                            />
                            
                        </div>

                               
                        <div className="flexcheck">
                            <div className="text">
                                <h4>По почте</h4>
                                <p>{email}</p>
                                
                            </div>
                            <Switch
                            checked={emailEnabled}
                            onChange={handleEmailChange}
                            // color="primary"
                            sx={customStyles}
                            />
                            
                        </div>

                    </div>
                    <div className="footer">
                        <h4>Поддержка</h4>
                        <Link className="footlink">Написать в поддержку</Link><br/>
                        <Link to="/faq/" className="footlink">FAQ</Link>

                    </div>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    closeTimeoutMS={500}
                    // className="ReactModal__Content"
                    // overlayClassName="ReactModal__Overlay"
                    style={{
                    content: {
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        // padding: '20px',
                        backgroundColor: 'black',
                        border: 'none',
                        borderRadius: '0',
                        overflow: 'auto',

                        animation: modalIsOpen ? 'slideInRight 0.5s forwards' : 'slideOutRight 0.5s forwards',
                        
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    }
                    }}
                >
                <div className="container">
                    <div onClick={closeModal} className="closechange">
                        <div className="bar1 open"></div>
                        <div className="bar2 open"></div>
                        <div className="bar3 open"></div>
                    </div>

                    <form className="change">
                        <div className="options">
                        <p>Старый пароль</p>
                        <input type="password" />
                        </div>
                        <div className="options">
                        <p>Новый пароль</p>
                        <input type="password" />
                        </div>
                        <div className="options">
                        <p>Повторите новый пароль</p>
                        <input type="password" />
                        </div>
                        <button type="submit" onClick={closeModal}>Установить</button>
                    </form>
                    </div>
                </Modal>
                <style>
                    {`
                    @keyframes slideInRight {
                        from {
                        transform: translateX(100%);
                        opacity: 0;
                        }
                        to {
                        transform: translateX(0);
                        opacity: 1;
                        }
                    }

                    @keyframes slideOutRight {
                        from {
                        transform: translateX(0);
                        opacity: 1;
                        }
                        to {
                        transform: translateX(100%);
                        opacity: 0;
                        }
                    }

                    .ReactModal__Content--after-open {
                        animation: slideInRight 0.5s forwards;
                    }

                    .ReactModal__Content--before-close {
                        animation: slideOutRight 0.5s forwards;
                    }
                    `}
                </style>
                </div>
            </div>
        </>
    );
};

export default MyProfile4;
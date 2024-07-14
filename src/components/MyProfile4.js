import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Switch } from '@mui/material';
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
                    <div className="inputsdiv">
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
                        <button>Установить</button>
                    </div>
                    <Link to="/change_password/" className="passwlink"><button className="passw">Сменить пароль</button></Link>
                    <div className="notification">
                        <h4 className="h4notif">Уведомления</h4>
                        <div className="flexcheck">
                            <div className="text">
                                <h4>В телеграм</h4>
                                <p>{telegram}</p>
                                {/* <p>{telegram ? telegram : '@user'}</p> */}
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
                                {/* <p>{email ? email : 'Например: alexcpa@mail.com'}</p> */}
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
                </div>
            </div>
        </>
    );
};

export default MyProfile4;
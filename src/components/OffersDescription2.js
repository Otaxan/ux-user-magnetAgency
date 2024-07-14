import React, {useState, useEffect} from "react";
import avatar from '../images/plaj.jpg';
import { FaCheck } from 'react-icons/fa'
import { ReactComponent as CopyIcon } from '../images/copyimg.svg'


const OffersDescription2=()=>{
    
    useEffect(() => {
        document.title = "Описание пользователя";
    }, []);



    const [link, setLink] = useState('');
    const [copied, setCopied] = useState(false)

    const generateLink = () => {
        const newLink = `https://example.com/${Math.random().toString(36).substring(2, 10)}`;
        setLink(newLink);
        setCopied(false);
    };
    const copyToClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }).catch(err => console.error('Failed to copy text: ', err));
        } else {
          // Запасной вариант для старых браузеров
          const textArea = document.createElement('textarea');
          textArea.value = link;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch (err) {
            console.error('Failed to copy text: ', err);
          }
          document.body.removeChild(textArea);
        }
    };

    return(
        <>
            <div className="container">
                <div className="detail">
                    <h2>НАЗВАНИЕ ОФФЕРА</h2>
                    <img src={avatar} alt="" />
                    
                    <p className="descp">описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание </p>
                    <div className="descripflex">
                        <div className="otddesc">
                            <p className="pdescdop">Геопозиция</p>
                            <p className="pdescdop dop">Франция</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Стоимость</p>
                            <p className="pdescdop dop">200 $</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Оплата</p>
                            <p className="pdescdop dop">500р за заказ</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Аппрув</p>
                            <p className="pdescdop dop">45 %</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Информация</p>
                            <p className="pdescdop dop">lorem ipsum dolor</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Информация</p>
                            <p className="pdescdop dop">lorem ipsum dolor</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Информация</p>
                            <p className="pdescdop dop">lorem ipsum dolor</p>
                        </div>
                        <div className="otddesc">
                            <p className="pdescdop">Информация</p>
                            <p className="pdescdop dop">lorem ipsum dolor</p>
                        </div>
                    </div>
                    <center><button className="generate" onClick={generateLink}>СГЕНЕРИРОВАТЬ ССЫЛКУ</button></center>
                    <div className="linkgenerate">
                        <p>Link</p>
                        <input type="text" value={link} readOnly/>
                        <button onClick={copyToClipboard} disabled={!link}>{copied ? <FaCheck color="green" size="15px" /> : <CopyIcon />}</button>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default OffersDescription2;
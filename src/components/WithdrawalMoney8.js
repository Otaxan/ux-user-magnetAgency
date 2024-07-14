import React, {useState} from "react";
import {Link} from "react-router-dom";
// import walletimg from "../images/wallet.png";
import { ReactComponent as Wallet} from "../images/wallet.svg";
import { ReactComponent as WalletBlack} from "../images/walletblack.svg";
import { ReactComponent as LimitsIcon} from "../images/vosklitznak.svg";
import { ReactComponent as Close} from "../images/close.svg";
import { ReactComponent as DeleteIcon } from "../images/delete.svg"
// import information from "../images/information.png";
// import deleteicon from "../images/deleteicon.png";
import Modal from 'react-modal';
// import addplus from "../images/addplus.png";


const WithdrawalMoney8 =()=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    const [modalIsOpen1, setModalIsOpen1] = useState(false);

    const openModal1 = () => {
        setModalIsOpen1(true);
    };

    const closeModal1 = () => {
        setModalIsOpen1(false);
    };


    const [selectedWallet, setSelectedWallet]=useState(null);
    const [wallets, setWallets]=useState([
        { id: 1, type: 'USDT кошелёк', address: 'TH4anc9AMAn7kyVPr6nuXBRwf1akgzCgsZ' },
        { id: 2, type: 'USDT кошелёк', address: 'EMPty4anc9AMAn7kyVPr6nuXBRwf1akgzCgsZ' },
        { id: 3, type: 'USDT кошелёк', address: 'HAPanc9AMAn7kyVPr6nuXBRwf1akgzCgsZ' },
    ])
    const deleteWallet = (id) =>{
        setWallets(wallets.filter(wallet => wallet.id !== id));
        if (selectedWallet && selectedWallet.id === id){
            setSelectedWallet(null);
        }
    }
    const handleWalletClick = (wallet) => {
        setSelectedWallet(wallet);
    };
    return(
        <>
            <div className="container">
                <div className="withdraw">
                    <h4>ВЫВОД СРЕДСТВ</h4>
                    <div className="walletwidget">
                        {selectedWallet ? (

                            <div className="leftwal">
                                <Wallet />
                                <div className="textleft" onClick={openModal}>
                                    <p className="walletname">{selectedWallet.type}</p>
                                    <p>{selectedWallet.address}</p>
                                </div>
                            </div>
                        ) : (
                            
                                <div className="leftwal">
                                    <Wallet />
                                    <div className="textleft" onClick={openModal}>
                                        <p>Выберите кошелёк</p>
                                    </div>
                                </div>

                            
                        )}
                        <p className="h3with">❯</p>
                    </div>
                    <div className="sumawith">
                        <h5 className="psum">Сумма</h5>
                        <input type="number" className="inputsum" placeholder="Сумма от 10 до 20 000$"/>
                    </div>
                    <div className="limits" onClick={openModal1}>
                        <LimitsIcon />
                        Лимиты и комиссии
                    </div>
                    <button className="butwithdrawal">ВЫВЕСТИ</button>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Wallet Modal"
                    style={{
                        content: {
                            top: '80%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            // background: 'red',
                            height: '45%',
                            width: '100%',
                            borderTopLeftRadius: '1.5rem',
                            borderTopRightRadius: '1.5rem',
                        },
                        overlay: {
                            background: 'rgba(0, 0, 0, 0.637)',
                        },
                    }}
                    >
                        <center style={{ marginTop: '-1rem', marginBottom: '2rem' }} onClick={closeModal}><Close /></center>
                        {wallets.map(wallet => (
                        <div className="walletwidget1">
                            <div className="leftwal1" key={wallet.id} id={`wallet${wallet.id}`} onClick={()=>handleWalletClick(wallet)}>
                                <WalletBlack />
                                <div className="textleft" onClick={openModal}>
                                    <p style={{ color: 'rgb(135, 135, 135)', fontSize: '1rem' }}>{wallet.type}</p>
                                    <p>{wallet.address}</p>
                                </div>
                            </div>
                            <DeleteIcon onClick={() => deleteWallet(wallet.id)} />

                        </div>
                        ))}
                        <Link to="/add_wallet/" style={{ textDecoration: 'none', color: 'black' }}>
                        
                            <div className="walletwidget1">
                                <div className="leftwal12">
                                    <div className="textleft" onClick={openModal}>
                                        <p>Добавить кошелёк</p>
                                    </div>
                                    <p className="pluswith">+</p>
                                </div>

                            </div>
                        </Link>
                    </Modal>
                    <Modal
                    isOpen={modalIsOpen1}
                    onRequestClose={closeModal1}
                    contentLabel="Limits Modal"
                    style={{
                        content: {
                            top: '85%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            // background: 'red',
                            height: '35%',
                            width: '100%',
                            borderTopLeftRadius: '1.5rem',
                            borderTopRightRadius: '1.5rem',
                        },
                        overlay: {
                            background: 'rgba(0, 0, 0, 0.637)',
                        },
                    }}
                    >
                        <center style={{ marginTop: '-1rem', marginBottom: '2rem' }} onClick={closeModal1}><Close /></center>
                        <h4 className="h4withdrawal">Лимиты и комиссии</h4>
                        <div className="flexwithdraw">
                            <div className="flexin" style={{ marginBottom: '1.5rem' }}>
                                <p>Комиссия за вывод</p>
                                <h4>2%, минимум 1$</h4>
                            </div>
                            <div className="flexin">
                                <p>Можно вывести за раз</p>
                                <h4>от 10 $ до 20000 $</h4>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default WithdrawalMoney8;
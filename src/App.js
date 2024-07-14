import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import OffersAll1 from './components/OffersAll1';
import OffersDescription2 from './components/OffersDescription2';
import Statistics3 from './components/Statistics3';
import MyProfile4 from './components/MyProfile4';
import ChangePassword5 from './components/ChangePassword5';
import Faq6 from './components/Faq6';
import Balance7 from './components/Balance7';
import WithdrawalMoney8 from './components/WithdrawalMoney8';
import AddWallet9 from './components/AddWallet9';
import ChooseLanguage from './components/ChooseLanguage';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import Confirmation from './components/Confirmation';
import ForgotPassword from './components/ForgotPassword';

const hidenav = ['/', '/authorization', '/authorization/', '/registration', '/registration/', '/confirmation', '/confirmation/', '/forgot_password', '/forgot_password/', '/change_password', '/change_password/'];


function App() {
  const location = useLocation();
  const shouldhide = hidenav.includes(location.pathname);
  return (
    <div>
      {!shouldhide && <Navbar/>}
      <Routes>
        <Route path="/" element={<ChooseLanguage/>}/>
        <Route path="/authorization" element={<Authorization/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/confirmation" element={<Confirmation/>}/>
        <Route path="/forgot_password" element={<ForgotPassword/>}/>
        <Route path="/all_offers" element={<OffersAll1/>}/>
        <Route path="/offer-detail" element={<OffersDescription2/>} />
        <Route path="/statistics" element={<Statistics3/>} />
        <Route path="/my_profile" element={<MyProfile4/>} />
        <Route path="/change_password" element={<ChangePassword5/>} />
        <Route path="/faq" element={<Faq6/>} />
        <Route path="/balance" element={<Balance7/>} />
        <Route path="/withdrawal_money" element={<WithdrawalMoney8/>} />
        <Route path="/add_wallet" element={<AddWallet9/>} />
      </Routes>
    </div>
  );
}

export default App;

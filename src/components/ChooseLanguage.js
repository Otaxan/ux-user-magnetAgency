import React from "react";
import {Link} from "react-router-dom";

const ChooseLanguage =()=>{
    return(
        <>
            <div className="container">
                <div className="languages">
                    <h1>ВЫБЕРИТЕ ЯЗЫК</h1>
                    <div>
                        <Link to="authorization/"><button>english</button></Link><br/>
                        <Link to="authorization/"><button>france</button></Link><br/>
                        <Link to="authorization/"><button>espanol</button></Link><br/>
                        <Link to="authorization/"><button>greece</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ChooseLanguage;
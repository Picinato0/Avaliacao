import React from'react';
import PropsTexto from './TextoProps/PropsTexto';
import './menu.css';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <div id="menu">
            <ul className="cabecalho">
                <Link to="/"><li><PropsTexto texto= "HOME" /></li></Link>
                <Link to="/pacotes"><li><PropsTexto texto= "PACOTES" /></li></Link> 
                <Link to="/faq"><li><PropsTexto texto= "FAQ" /></li></Link>
                <Link to="/suporte"><li><PropsTexto texto= "SUPORTE" /></li></Link>
            </ul>
        </div>
    );
}
export default Menu;
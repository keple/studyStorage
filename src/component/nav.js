import React from 'react';
import logo from '../img/logo192.png';
const menus = ['test','test1'];
function navBar({classname}){
    return (
        <>
            <img className="logo" src={logo}/>
            <nav>
                <ul className='nav_item'>
                
                {
                    menus.map((ele,index)=>{
                       return <li key={index}><a href="#"><button>{ele}</button></a></li>
                    })
                }
                </ul>
            </nav>
        </>
    )
}

export default navBar;
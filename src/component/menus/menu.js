import React from 'react';
const menuItem = [
    {name : 'test'},
    {name : 'test1'}
]
function menus(){
    return (
        <div className="menu_bar">
            <ul className="menu_items">
            {
                menuItem.map((item,index)=>{
                   return(
                    <li key={index}>
                        {item.name}
                    </li>
                   ); 
                })
            }
            </ul>
        </div>
    );
}

export default menus;
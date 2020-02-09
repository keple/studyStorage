import React from 'react';
import './App.css';

function setpageInputs({id,className,display,color,box,type}){
    return (
        <tr className={box}>
            <th><span style={{color:color}}>{display}</span></th>
            <td><input type={type}id={id} className={className}></input></td>
        </tr>
    );
}
setpageInputs.defaultProps = {
    box:'box-input',
    type:'input'
};
export default setpageInputs;
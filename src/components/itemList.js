import React, { useState } from 'react';

const ItemList = ({mockData, hamburger, setHambuger}) => {

    const deleteAction = (item) => {
        // use useState
        //  Delete action is homework 
    }
    
    return (
        <table>
            <tr>
                <td>Name</td>
                <td>Total Item</td>
                <td>Delete Item</td>
                <td>Add Item</td>
            </tr>
            {mockData.map(item => <tr>
                <td>{item.name}</td>
                <td><h1>0</h1></td>
                <td><button onClick={() => deleteAction(item)}>Delete</button></td>
                <td><button onClick={() => setHambuger([...hamburger, item])}>Add</button></td>
            </tr>)}
        </table>
    );
}

export default ItemList;
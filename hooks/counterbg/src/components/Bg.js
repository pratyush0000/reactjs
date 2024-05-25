import React, { useState } from 'react';

function Bg(){

    const[state, setState] = useState({theme: "blue"})
    const theme = state.theme;


    const pageStyle = {
        backgroundColor: theme,
        minHeight: '90vh', // Ensure the background color fills the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center' // Center-align the text
    };

    function changebg(event){
        setState({theme: event.target.value})
    }

    return(
        <div style={pageStyle}>
            <input type='text' value={theme} onChange={changebg} 
            style={{
                border: '1px solid black', // Remove the border
                textAlign: 'center', // Center-align the text within the input box
                outline: 'none', // Remove the focus outline
                boxShadow: 'none', // Remove the box shadow
                width: '20%', // Make the input box fill the available space
                height: '10%',
                padding: '10px', // Add some padding
                borderRadius: '5px', // Add border radius for styling
                background: 'transparent' // Make the background transparent
            }}
            >
            </input>
        </div>
    )
}


export default Bg;
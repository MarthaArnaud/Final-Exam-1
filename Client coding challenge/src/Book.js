import React from 'react';

function Book( props ){
//recibir el arreglo de books del estado de App.js para desplegarlos uno por uno
    
    return(
        
        <div>
            
                
                <h1>Title:{props.title}</h1>
                <h1>Author: {props.author}</h1>
                <h1>Text snippet:{props.textSnippet}</h1>
                <img src={props.thumbnail}alt="Thumbnail"></img>
            
           
            
        </div>
    );
}

export default Book;
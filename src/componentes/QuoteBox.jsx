import React, { useState } from 'react';
import Phrase from '../componentes/Phrase.json'

const QuoteBox = ({ titlePhrase }) => {

    const randomRelative = Math.floor(Math.random() * Phrase.length)
    const [relative, setRelative] = useState(randomRelative)

    const click = ()=>{
        const changePhrase =Math.floor(Math.random() * Phrase.length)
        setRelative(changePhrase)
       }

       const colors= ['#DA7A22','#D85858','#B4507D','#7B5489','#FFBC52','#2F4858']
       const changeColors = Math.floor(Math.random() * colors.length)
      document.body.style= `background : ${colors[changeColors]}` 


    return (
        <div className='container'>
            <h1 className='title size' style={{ color: colors[changeColors] }}>{titlePhrase}</h1>
            <div className='cardPhrase'>
                <h2 className='phrase size' style={{ color: colors[changeColors] }}>
                    <i class="fa-solid fa-quote-left"></i>  {Phrase[relative].quote} <i class="fa-solid fa-quote-left"></i>
                </h2>
            </div>
            <h3 className='author size' style={{ color: colors[changeColors] }}>
                {Phrase[0].author}
            </h3>
            <div className="button" style={{ color: colors[changeColors] }}>
                <i onClick={click} class="fa-solid fa-circle-chevron-right circle icon" c></i>
            </div>

        </div>
    );
};

export default QuoteBox;
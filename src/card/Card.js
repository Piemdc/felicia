import  './card.css';
import React, { useState } from 'react';
import cardLogo from '../images/card-logo.svg'

export default function Card(){


    const [cardNumber,setCardNumber] = useState('0000 0000 0000 0000');
    const [cardName,setCardName] = useState('JANE APPLESEED');
    const [cardMonth,setCardMonth] = useState('00');
    const [cardYear,setCardYear] = useState('00');
    const [cardCvc, setCardCvc] = useState('000')

    const nameChange = event => {
        setCardName(event.target.value);
    };

    const numberChange = event => {
        setCardNumber(event.target.value);
    };

    const monthChange = event => {
        setCardMonth(event.target.value);
    };
    const yearChange = event => {
        setCardYear(event.target.value);
    };
    const cvcChange = event => {
        setCardCvc(event.target.value);
    };




    return(




<div className='main'>
        <div className='cardBox'>

            <div className='cardPreviewBox'>

                <div className='backCard'>
                  <div className='cvcBox'>{cardCvc}</div>
                </div>

                <div className='frontCard'>
                    <div>
                        <div className='cardLogoBox'>
                            <img src={cardLogo} alt="Card logo"/>
                        </div>

                        <p className='cardNumber'>{cardNumber}</p>
                        <p className='cardName'>{cardName}</p>
                        <p className='cardExp'>{cardMonth +'/' + cardYear}</p>
                    </div>
                </div>
            </div>

            <div className='cardInput'>

            </div>
        </div>

    <form onSubmit='' className='cardInput'>
        <label className='nameInput'>
            <p>CARDHOLDER NAME</p>
            <input type="text" placeholder='e.g. Jane Appleseed' onChange={nameChange} />
        </label>

        <label className='numberInput'>
            <p>CARD NUMBER</p>
            <input type="number" placeholder='e.g. 0000 0000 0000 0000' onChange={numberChange} />
        </label>

        <div className='expcvc'>
            <label className="expInput">
                <p> EXP. DATE (MM/YY)</p>
                <input type="number" placeholder="MM" onChange={monthChange} />
                <input type="number" placeholder="YY" onChange={yearChange} />
            </label>

            <label className="cvcInput">
                <p>CVC</p>
                <input type="number" placeholder="e.g. 123" onChange={cvcChange} />
            </label>

        </div>

        <input type="submit" value="Confirm" />
    </form>

</div>



    )

}
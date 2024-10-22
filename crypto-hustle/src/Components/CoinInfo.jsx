import { useState, useEffect } from 'react'

const API_KEY=import.meta.env.VITE_APP_API_KEY;
const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);
    useEffect(() => {
        const options = {
            method: 'GET',
            authorization: API_KEY,
        }
        async function getCoinPrice() {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR`, options)
            const json = await response.json()
            setPrice(json);
        };
        getCoinPrice().catch(console.error);
    }, [symbol]);
    return (
        <>
            {price ? (
                <li className='main-list' key={symbol}>
                    <img src={`https://www.cryptocompare.com${image}`} alt={`Small icon for ${name} crypto coin`} />
                    {name} <span className='tab'>${price.USD}USD</span>
                </li>
            ):null
        }
        </>
    )
}
export default CoinInfo;
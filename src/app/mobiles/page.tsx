import React from 'react'

const Mobiles = () => {
   const mobilesData = [
    { id: 1, name: 'All Sample', price: 599999, description: 'All Company Mobile', image: '/initail.jpg' },
    { id: 2, name: 'Iphone 17 pro max', price: 399999, description: 'Camera Swipe Button ', image: '/17promax.jpg' },
    { id: 3, name: 'Iphone 16 pro max', price: 349999, description: 'Chip is A18pro', image: '/16promax.jpg' },
    { id: 4, name: 'Iphone 16', price: 299999, description: 'Latest Version Device', image: '/iphone16.jpg' },
    { id: 5, name: 'Iphone 12 pro max', price: 259999, description: 'Dual Standby Sim', image: '/iphone12promax.jpg' },
    { id: 6, name: 'Iphone 12 ', price: 109999, description: 'Cinematic Phone', image: '/ipone12.jpg' },
    { id: 7, name: 'OnePlus 10 pro', price: 69999, description: 'Best Mobile In OnePlus', image: '/oneplus.jpg' },
    { id: 8, name: 'Iphone 6s', price: 49999, description: 'Slim Iphone With Box', image: '8pls.jpg' },
    { id: 9, name: 'Samsung S4', price: 19999, description: 'samsung mobile', image: '/samsung.jpg' },
   ];

    return (
    <div className='div'>
    {mobilesData.map(mobiles => (
        <div key={mobiles.id} className='keys'>
        <img src={mobiles.image} alt={mobiles.name} className='src' />
        <h3 className='h3'>{mobiles.name}</h3>
        <p className='p'>{mobiles.description}</p>
        <div className='react'>${mobiles.price}</div>
        <button className='button'>Add to Cart</button>       
        </div> 
    ))}
    </div>    
  );
};

export default Mobiles;
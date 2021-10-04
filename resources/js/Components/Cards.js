import React from 'react';
import '../../css/Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Posts!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.webp'
                            text='Shot on iPhone'
                            label='Paid'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.webp'
                            text='Project #ShowUs'
                            label='Partnership'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.webp'
                            text='Voice Your Values'
                            label='Paid'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.webp'
                            text='Super Bowl Commercial'
                            label='Event'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-5.webp'
                            text='Develop a Unique Brand Voice'
                            label='Event'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

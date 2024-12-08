import React from 'react'
import style from '../modules/style.module.css'

const Card = () => {
    return (
        <div class={style.card}>
            <img src="https://via.placeholder.com/300x200" alt="Card image" class={style["card-image"]} />
                <div class={style["card-content"]}>
                    <h2 class={style["card-title"]}>Card Title</h2>
                    <p class={style["card-description"]}>This is a description of the card. Add any relevant details here.</p>
                    <button class={style["card-button"]}>Learn More</button>
                </div>
        </div>
    )
}

export default Card
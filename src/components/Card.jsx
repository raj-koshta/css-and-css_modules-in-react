import React from 'react'
import style from '../modules/style.module.css'

const Card = (data) => {
    const item = data.data
    return (
        <div className={style.card}>
            <img src={item.img_url} alt="Card image" className={style["card-image"]} />
                <div className={style["card-content"]}>
                    <h2 className={style["card-title"]}>{item.name}</h2>
                    <p className={style["card-description"]}>{item.description}</p>
                    <a href={item.watch_url} className={style["card-button"]}>Watch Now</a>
                </div>
        </div>
    )
}

export default Card
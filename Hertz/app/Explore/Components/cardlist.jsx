import React from 'react'

const cardlist = () => {
    const cardInfo = [{img: "", songName: "", author: ""}]
  return (
    <div>
        {cardInfo.map((card, index) => 
            <div className="card-container">
                <img src={card.img} alt={card.img} />
                <p>{card.author}</p>
                <p>{card.songName}</p>
            </div>
        )}
    </div>
  )
}

export default cardlist
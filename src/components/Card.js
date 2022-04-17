function Card({cardData, onCardClick}) {

  function handleClick() {
    onCardClick(cardData);
  }
    
  return (
      <div className="element" onClick={handleClick}>
        <img className="element__image" src={cardData.link} alt={cardData.name}/>
        <button className="element__remove-button"></button>
        <div className="element__content">
            <p className="element__name">{cardData.name}</p>
            <div className="element__like">
              <button className="element__like-button"></button>
              <p className="element__like-count">{cardData.likes.length > 0 && cardData.likes.length}</p>
            </div>
        </div>  
      </div>
  )
}

export default Card;
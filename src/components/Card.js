function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }
    
  return (
      <div className="element" onClick={handleClick}>
        <img className="element__image" src={props.card.link} alt={props.card.name}/>
        <button className="element__remove-button"></button>
        <div className="element__content">
            <p className="element__name">{props.card.name}</p>
            <div className="element__like">
              <button className="element__like-button"></button>
              <p className="element__like-count">{props.card.likes.length > 0 ? props.card.likes.length : ''}</p>
            </div>
        </div>  
      </div>
  )
}

export default Card;
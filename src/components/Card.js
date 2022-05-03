import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({cardData, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardData.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__remove-button ${isOwn ? 
    'element__remove-button_visible' : 'element__remove-button_hidden'}`;

  const isLiked = cardData.likes.some(like => like._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${isLiked ?
    'element__like-button_active' : ''}`;

  function handleClick() {
    onCardClick(cardData);
  }

  function handleLike() {
    onCardLike(cardData);
  }

  function handleDelete() {
    onCardDelete(cardData);
  }
    
  return (
      <div className="element">
        <img className="element__image" src={cardData.link} alt={cardData.name} onClick={handleClick}/>
        <button className={cardDeleteButtonClassName} onClick={handleDelete}></button>
        <div className="element__content">
            <p className="element__name">{cardData.name}</p>
            <div className="element__like">
              <button className={cardLikeButtonClassName} onClick={handleLike}></button>
              <p className="element__like-count">{cardData.likes.length > 0 && cardData.likes.length}</p>
            </div>
        </div>  
      </div>
  )
}

export default Card;
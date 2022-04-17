function ImagePopup({cardData, isOpen, onClose}) {
  
    return (
      <div className={`popup ${isOpen}`}>
        <div className="popup__image-container">
          <img className="popup__image" src={cardData.link} alt={cardData.name}/>
          <p className="popup__image-title">{cardData.name}</p>
          <button className="popup__close-button" onClick={onClose}></button>
        </div>
      </div>
    )
}

export default ImagePopup;
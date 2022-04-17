function ImagePopup(props) {
    return (
      <div className={`popup ${props.isOpen} popup_type_image`}>
        <div className="popup__image-container">
          <img className="popup__image" src={props.card.link} alt={props.card.name}/>
          <p className="popup__image-title">{props.card.name}</p>
          <button className="popup__close-button" onClick={props.onClose}></button>
        </div>
      </div>
    )
}

export default ImagePopup;
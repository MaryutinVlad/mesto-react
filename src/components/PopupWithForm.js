function PopupWithForm({name, title, isOpen, onClose, buttonText, children}) {

  return (
    <div className={`popup ${isOpen}`}>
        <div className="popup__container">
          <form className="form" action="#" name={name} noValidate>
            <h2 className="popup__heading">{title}</h2>
              {children}
            <button  type="submit" className={`form__submit-button form__submit-button_type_${name}`}>
              {buttonText}
            </button>
          </form>
          <button className="popup__close-button" onClick={onClose}></button>
        </div>
      </div>
    )
}

export default PopupWithForm;
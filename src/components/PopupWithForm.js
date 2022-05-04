import React from "react";

function PopupWithForm({name, title, isOpen, onClose, buttonText, children, onSubmit}) {

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <form className="form" action="#" name={name} onSubmit={onSubmit} noValidate>
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
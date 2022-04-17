function PopupWithForm(props) {

  return (
    <div className={`popup ${props.isOpen} popup_type_${props.name}`}>
        <div className="popup__container">
          <form className="form" action="#" name={props.name} noValidate>
            <h2 className="popup__heading">{props.title}</h2>
              {props.children}
            <button  type="submit" className={`form__submit-button form__submit-button_type_${props.name}`}>
              {props.name === 'confirm' ? 'Да' : 'Сохранить'}
            </button>
          </form>
          <button className="popup__close-button" onClick={props.onClose}></button>
        </div>
      </div>
    )
}

export default PopupWithForm;
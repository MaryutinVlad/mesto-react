import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const title = React.useRef('');
  const link = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      link: link.current.value,
      place : title.current.value
    });
    title.current.value = '';
    link.current.value = '';
  }

  return (
    <PopupWithForm
      name='add'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input className="form__input-field form__input-field_type_place-title" id="title-input"
       type="text" placeholder="Название" required minLength="2" maxLength="30" name="place" ref={title}/>
      <span  className="form__error title-input-error"></span>

      <input className="form__input-field form__input-field_type_place-link" id="url-input"
       type="url" placeholder="Ссылка" required name="link" ref={link}/>
      <span className="form__error url-input-error"></span>

    </PopupWithForm>
  )
}

export default AddPlacePopup;
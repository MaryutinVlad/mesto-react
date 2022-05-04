import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({avatar: avatarRef.current.value});
    avatarRef.current.value = '';
  }

  return (

    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input className="form__input-field form__input-field_type_link" type="url" 
       id="avatar-input" placeholder="Ссылка на картинку" name="avatar" ref={avatarRef} required/>
      <span  className="form__error avatar-input-error"></span>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;
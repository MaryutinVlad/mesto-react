import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        onUpdateUser({
            name,
            about: description
        });
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser.name, currentUser.about, isOpen]);

    return (
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        isOpen={isOpen}
        onClose={onClose}
        buttonText='Сохранить'
        onSubmit={handleSubmit}
      >
        <input className="form__input-field form__input-field_type_name" id="name-input" 
          autoComplete="off" type="text" placeholder="Имя" required minLength="2" maxLength="40"
          name="name" onChange={handleNameChange} value={name || ''}/> 
        <span className="form__error name-input-error"></span>

        <input className="form__input-field form__input-field_type_description" id="description-input" 
          autoComplete="off" type="text" placeholder="О себе" required minLength="2" maxLength="200" 
          name="description" onChange={handleDescriptionChange} value={description || ''}/>
        <span className="form__error description-input-error"></span>

      </PopupWithForm>
    )
}

export default EditProfilePopup;
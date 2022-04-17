import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {

  const [isEditPopupOpen, setOpenEditPopup] = React.useState(false);
  const [isAvatarPopupOpen, setOpenAvatarPopup] = React.useState(false);
  const [isAddPopupOpen, setOpenAddPopup] = React.useState(false);
  const [selectedCard, setSelected] = React.useState(false);

  function handleEditAvatarClick() {
    setOpenAvatarPopup(!isAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setOpenEditPopup(!isEditPopupOpen);
  }

  function handleAddPlaceClick() {
    setOpenAddPopup(!isAddPopupOpen);
  }

  function closeAllPopups() {
    setOpenAvatarPopup(false);
    setOpenEditPopup(false);
    setOpenAddPopup(false);
    setSelected(false);
  }

  function handleCardClick(card) {
    setSelected(card)
  }

  return (
    <div className="page">
      <Header/>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        handleCardClick = {handleCardClick}
      />

      <Footer/>
      
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        isOpen = {isEditPopupOpen ? 'popup_opened' : ''}
        onClose = {closeAllPopups}
      >
        <input className="form__input-field form__input-field_type_name" id="name-input" autoComplete="off"
         type="text" placeholder="Имя" required minLength="2" maxLength="40" name="name"/>
        <span className="form__error name-input-error"></span>

        <input className="form__input-field form__input-field_type_description" id="description-input" autoComplete="off"
         type="text" placeholder="О себе" required minLength="2" maxLength="200" name="description"/>
        <span className="form__error description-input-error"></span>

      </PopupWithForm>
      
      <PopupWithForm
        name='add'
        title='Новое место'
        isOpen = {isAddPopupOpen ? 'popup_opened' : ''}
        onClose = {closeAllPopups}
      >
        <input className="form__input-field form__input-field_type_place-title" id="title-input"
         type="text" placeholder="Название" required minLength="2" maxLength="30" name="place"/>
        <span  className="form__error title-input-error"></span>

        <input className="form__input-field form__input-field_type_place-link" id="url-input"
         type="url" placeholder="Ссылка на картинку" required name="link"/>
        <span className="form__error url-input-error"></span>

      </PopupWithForm>

      <PopupWithForm name='confirm' title='Вы уверены?'/>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen = {isAvatarPopupOpen ? 'popup_opened' : ''}
        onClose = {closeAllPopups}
      >
        <input className="form__input-field form__input-field_type_link" type="url" 
         id="avatar-input" placeholder="Ссылка на картинку" name="avatar" required/>
        <span  className="form__error avatar-input-error"></span>

      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen = {selectedCard ? 'popup_opened' : ''}
        onClose = {closeAllPopups}
      />

    </div>
  );
}

export default App;

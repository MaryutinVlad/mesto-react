import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from "../utils/api";
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditPopupOpen, setOpenEditPopup] = React.useState(false);
  const [isAvatarPopupOpen, setOpenAvatarPopup] = React.useState(false);
  const [isAddPopupOpen, setOpenAddPopup] = React.useState(false);
  const [selectedCard, setSelected] = React.useState(null);
  const [currentUser, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);

  function handleEditAvatarClick() {
    setOpenAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setOpenEditPopup(true);
  }

  function handleAddPlaceClick() {
    setOpenAddPopup(true);
  }

  function closeAllPopups() {
    setOpenAvatarPopup(false);
    setOpenEditPopup(false);
    setOpenAddPopup(false);
    setSelected(null);
  }

  function handleCardClick(card) {
    setSelected(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.toggleLike(card._id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => card._id === c._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(state => state.filter(c => card._id !== c._id));
      })
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateUser(data) {
    api.updateProfile(data, false)
      .then(userData => {
        setUserData(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleAvatarUpdate(data) {
    api.updateProfile(data, true)
      .then(userData => {
        setUserData(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    api.getUserData()
      .then(userData => {
          setUserData(userData);
      })
      .catch(err => console.log(err));
    }, []);

    React.useEffect(() => {
      api.getInitialCards()
        .then(cards => {
          setCards([...cards]);
        })
        .catch(err => console.log(err));
    }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      
      <Header/>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        handleCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer/>
      
      <EditProfilePopup isOpen={isEditPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      
      <AddPlacePopup isOpen={isAddPopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        buttonText='Да'
      />

      <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleAvatarUpdate}/>

      <ImagePopup
        cardData={selectedCard ? selectedCard : {}}
        isOpen={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

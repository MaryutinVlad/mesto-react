import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, handleCardClick, cards, onCardLike, onCardDelete}) {

  const userData = React.useContext(CurrentUserContext);

    return (
      
      <main className="content">
        
        <section className="profile">
          <button className="profile__edit-avatar" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userData.avatar} alt="Жак-Ив Кусто"/>
          </button>  
          <div className="profile__info">
            <h1 className="profile__name">{userData.name}</h1>
            <button className="profile__edit-button" onClick={onEditProfile}></button>
            <p className="profile__description">{userData.about}</p>
          </div>
          <button className="profile__add-button" onClick={onAddPlace}></button>
        </section>

          <section className="elements">
            {cards.map(item => (
              <Card key={item._id} cardData={item} onCardClick={handleCardClick}
              onCardLike={onCardLike} onCardDelete={onCardDelete}/>
            ))}
          </section>

      </main>
      
    )
}

export default Main;
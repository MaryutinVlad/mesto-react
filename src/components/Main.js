import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getAppInfo()
        .then(([cardsArray, userData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cardsArray);
        })
        .catch(err => console.log(err));
      })  

    return (
      <main className="content">
        <section className="profile">
          <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Жак-Ив Кусто"/>
          </button>  
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements">
          {cards.map(item => (
            <Card key={item._id} card={item} onCardClick={props.handleCardClick}/>
          ))}
        </section>
      </main>
    )
}

export default Main;
let popup = document.querySelector('.popup');

let openPopupBtn = document.querySelector('.profile__vector');

let closePopupBtn = document.querySelector('.popup__close-button');

let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let nameElement = document.querySelector('.popup__input_name');
let jobElement = document.querySelector('.popup__input_job');

function openPopup() {
  popup.classList.add('popup__visible');
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}
function closePopup() {
  popup.classList.remove('popup__visible')
}

openPopupBtn.addEventListener('click', openPopup) 

closePopupBtn.addEventListener('click', closePopup)

let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameElement.value;
  jobInput.textContent = jobElement.value;
  closePopup()
};
formElement.addEventListener('submit', formSubmitHandler); 

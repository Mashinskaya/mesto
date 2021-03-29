let popup = document.querySelector('.popup');

let openPopupBtn = document.querySelector('.open_popup_btn');

let closePopupBtn = document.querySelector('.popup__close-button');
let savePopupBtn = document.querySelector('.popup__save-button');


function openPopup() {
  popup.classList.add('popup__visible')
}
function closePopup() {
  popup.classList.remove('popup__visible')
}

openPopupBtn.addEventListener('click', openPopup) 


closePopupBtn.addEventListener('click', closePopup)






let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let nameElement = document.querySelector('.popup__name');
let jobElement = document.querySelector('.popup__job');
console.log(popup__name.textContent);

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameElement.value;
  jobInput.textContent = jobElement.value;
  closePopup()
};

formElement.addEventListener('submit', formSubmitHandler); 